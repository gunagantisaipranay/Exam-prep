import axios from 'axios';

interface StudyPlanParams {
  examName: string;
  daysRemaining: number;
  studyHoursPerDay: number;
  currentLevel: string;
  topics: string[];
}

export const generateStudyPlan = async (params: StudyPlanParams) => {
  const { examName, daysRemaining, studyHoursPerDay, currentLevel, topics } = params;

  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'sk-your-openai-api-key-here') {
    return generateFallbackPlan(params);
  }

  try {
    const prompt = `You are an expert exam preparation coach.

Generate a personalized week-by-week study plan for:
- Exam: ${examName}
- Days remaining: ${daysRemaining}
- Study hours per day: ${studyHoursPerDay}
- Current level: ${currentLevel}
- Topics to cover: ${topics.join(', ')}

Include:
- Weekly topics to cover
- Daily breakdown of tasks
- Time allocation per topic
- Revision schedule
- Mock test schedule

Output as JSON:
{
  "weeks": [
    {
      "week_number": 1,
      "focus_topics": ["topic1", "topic2"],
      "daily_tasks": {
        "monday": ["task1", "task2"],
        "tuesday": ["task1", "task2"],
        "wednesday": ["task1", "task2"],
        "thursday": ["task1", "task2"],
        "friday": ["task1", "task2"],
        "saturday": ["task1", "task2"],
        "sunday": ["task1", "task2"]
      },
      "goals": "Clear fundamentals"
    }
  ],
  "revision_weeks": [4, 8],
  "mock_test_schedule": ["Week 5", "Week 9"]
}`;

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are an expert exam preparation coach. Always respond with valid JSON.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 2000
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const content = response.data.choices[0].message.content;
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }

    return generateFallbackPlan(params);
  } catch (error) {
    console.error('OpenAI API error:', error);
    return generateFallbackPlan(params);
  }
};

const generateFallbackPlan = (params: StudyPlanParams) => {
  const { examName, daysRemaining, studyHoursPerDay, topics } = params;
  const weeksAvailable = Math.ceil(daysRemaining / 7);
  const topicsPerWeek = Math.max(1, Math.floor(topics.length / Math.max(1, weeksAvailable - 2)));

  const weeks = [];
  let topicIndex = 0;

  for (let i = 1; i <= Math.min(weeksAvailable, 12); i++) {
    const weekTopics = topics.slice(topicIndex, topicIndex + topicsPerWeek);
    topicIndex += topicsPerWeek;

    if (i > weeksAvailable - 2) {
      weeks.push({
        week_number: i,
        focus_topics: ['Revision of all topics'],
        daily_tasks: {
          monday: ['Review weak areas', 'Practice questions'],
          tuesday: ['Mock test - Full length', 'Analyze performance'],
          wednesday: ['Topic revision', 'Speed practice'],
          thursday: ['Concept clarification', 'Previous year questions'],
          friday: ['Mock test - Section wise', 'Error analysis'],
          saturday: ['Final revision', 'Quick notes review'],
          sunday: ['Rest and light revision', 'Strategy planning']
        },
        goals: i === weeksAvailable ? 'Final preparation and confidence building' : 'Comprehensive revision'
      });
    } else {
      weeks.push({
        week_number: i,
        focus_topics: weekTopics,
        daily_tasks: {
          monday: [`Study ${weekTopics[0] || 'Core concepts'}`, `Practice problems (${studyHoursPerDay}h)`],
          tuesday: [`Continue ${weekTopics[0] || 'Topics'}`, 'Solve practice questions'],
          wednesday: [`Study ${weekTopics[1] || 'Next topic'}`, 'Make notes'],
          thursday: ['Practice mixed questions', 'Review concepts'],
          friday: [`${weekTopics[weekTopics.length - 1] || 'Advanced topics'}`, 'Problem solving'],
          saturday: ['Weekly revision', 'Practice test on week topics'],
          sunday: ['Review mistakes', 'Plan next week']
        },
        goals: `Master ${weekTopics.join(', ') || 'fundamental concepts'}`
      });
    }
  }

  return {
    examName,
    totalWeeks: weeks.length,
    studyHoursPerDay,
    weeks,
    revision_weeks: [Math.max(1, weeksAvailable - 1), weeksAvailable],
    mock_test_schedule: weeks
      .filter((_, idx) => (idx + 1) % 3 === 0)
      .map(w => `Week ${w.week_number}`)
  };
};
