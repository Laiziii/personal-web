/* =========================================================
   PORTFOLIO DATA — one entry per project, newest first.
   To add a project, copy an entry and edit it.
   - pdf:  path to a file in /files, or null for summary-only
   - privateNote: shown instead of a download when pdf is null
   - stats: optional [number, label] pairs shown under the title
   - sections: rendered in order on the project page.
     Each has a heading and either "text" (a paragraph) or "list" (bullets).
   ========================================================= */
window.PROJECTS = [

  /* ---------------- Fall 2026 ---------------- */
  {
    id: "akaza-public-pedagogy",
    title: "Akaza, judgment and public pedagogy",
    course: "ADED 3P94",
    courseName: null,
    term: "Fall 2026",
    type: "Presentation",
    format: "Solo",
    area: "Education & society",
    summary: "Used an anime villain's backstory to show how popular culture can teach people to look past someone's worst action.",
    tools: ["Popular culture as pedagogy", "Jubas, Taber & Brown (2015)", "PowerPoint"],
    pdf: null,
    privateNote: "The slides aren't posted yet.",
    sections: [
      { heading: "The idea", text: "Popular culture doesn't just entertain. It can teach. I tested that idea on myself, using Demon Slayer: Infinity Castle (2025) and the villain Akaza, the character I hated most after he killed Rengoku." },
      { heading: "What I showed", list: [
        "Akaza's human past as Hakuji: stealing medicine for his sick father, being punished instead of helped, finding a new life, then losing it when a rival dojo poisoned the well.",
        "How his wish to protect people turned into an obsession with strength once that loss happened.",
        "My own shift from judging the action to asking about the story behind it.",
        "A real-world link: news stories about people stealing baby formula or diapers, and pausing to consider desperation before judging."
      ] },
      { heading: "The theory behind it", text: "Jubas, Taber and Brown (2015) argue that audiences actively make meaning from stories and use characters to reflect on themselves. I used that to explain why a widely watched anime can put questions about poverty, grief and punishment in front of people who would never study them in a classroom." },
      { heading: "What I took away", text: "Understanding isn't the same as excusing. Responsibility and compassion can sit together, and a story made that stick in a way a lecture probably wouldn't." }
    ]
  },
  {
    id: "hospice-outreach-critical-discourse",
    title: "Critical discourse: hospice palliative care outreach",
    course: "ADED 3P41",
    courseName: "Community Outreach and Adult Literacy",
    term: "Fall 2026",
    type: "Critical response",
    format: "Solo",
    area: "Education & society",
    summary: "Pushed past a positive guest presentation to ask who a rural hospice program actually reaches and how it knows it's working.",
    tools: ["Community development", "Adult learning theory", "2021 Census"],
    pdf: "files/hospice-palliative-outreach-critical-discourse.pdf",
    stats: [["2,848 km²", "area the program serves"], ["116,706", "residents (2021 Census)"]],
    sections: [
      { heading: "The program", text: "Haldimand-Norfolk Community Senior Support Services offers free hospice palliative care outreach to people with a life-limiting illness and their families. It covers care planning, caregiver support, volunteer respite, grief groups and safeTALK suicide alertness training." },
      { heading: "What works", list: [
        "It fills the emotional and family needs that clinical care alone can't meet.",
        "It shows community development in action through place, interaction, change and social capital, especially volunteer time and local trust.",
        "Its training and groups follow adult learning principles: relevant, self-directed and immediately useful."
      ] },
      { heading: "The hard questions", list: [
        "Reach: in a large rural region, travel, transport and internet access may decide who gets help. Wait times and unmet requests aren't reported.",
        "Voice: it's unclear how much clients and caregivers shape the program, and it leans heavily on unpaid volunteers.",
        "Evidence: free services and referral routes are assets, but there's no public data on whether caregivers feel less isolated or volunteers feel prepared."
      ] },
      { heading: "What I'd change", text: "Rotating sessions in smaller communities, private meeting space through libraries, phone and virtual options, a transportation partnership, local ambassadors and a client and caregiver advisory group, all tested with residents first." }
    ]
  },
  {
    id: "peer-vaccine-outreach-bridges-niagara",
    title: "Bridging the gap: peer-to-peer vaccine outreach",
    course: "ADED 3P41",
    courseName: "Community Outreach and Adult Literacy",
    term: "Fall 2026",
    type: "Presentation",
    format: "Solo",
    area: "Education & society",
    summary: "Analysed how Bridges Niagara uses trusted peers to bring vaccine information to newcomers, and how the program could reach further.",
    tools: ["Andragogy (Knowles)", "Social capital (Putnam)", "PowerPoint"],
    pdf: null,
    privateNote: "The slides aren't posted yet.",
    sections: [
      { heading: "The program", text: "Bridges Niagara Immigrant and Refugee Services runs information sessions where newcomers get culturally and linguistically appropriate information about COVID-19 and vaccines from peers who have been through settling in themselves. I opened with Amina, a fictional newcomer, to show who it's for." },
      { heading: "How I analysed it", list: [
        "As a community: place, interaction, change and social capital, with peers acting as a bridge to mainstream health services.",
        "As adult education: need to know, self-direction, life experience, relevance, and trust (Knowles, 1980).",
        "Against the local need: language and cultural barriers that keep newcomers from health information."
      ] },
      { heading: "What I'd add", list: [
        "Wider topics: flu, cancer screening and mental health.",
        "Training and recognition for peer educators.",
        "Evening, weekend and online sessions for working adults.",
        "Partnerships with public health and libraries."
      ] },
      { heading: "My verdict", text: "A medium-to-strong community: people learn together and it connects to wider services, but it depends on funding and volunteers, and its reach beyond the agency's own network is unclear." }
    ]
  },
  {
    id: "leadership-philosophy",
    title: "My leadership philosophy",
    course: "ADED 2P97",
    courseName: "Introduction to Leadership Theory in Adult Education",
    term: "Fall 2026",
    type: "Reflection",
    format: "Solo",
    area: "Writing & reflection",
    summary: "Defined the kind of leader I want to be before holding any formal role: listen first, support others, own my part.",
    tools: ["Servant leadership", "Authentic leadership", "Leaderful practice", "Inclusive leadership"],
    pdf: null,
    privateNote: "The full reflection isn't shared because it includes personal details.",
    sections: [
      { heading: "The question", text: "What does leadership look like for someone who tends to be quiet and doesn't have a title? This reflection connects four values to leadership theory and to everyday situations like group work and being part of a team." },
      { heading: "The four values", list: [
        "Listening: asking instead of assuming, and checking understanding by having people explain things back (Spears, 2005).",
        "Empathy: remembering people have lives outside the place I know them, while keeping responsibilities fair.",
        "Self-awareness: being honest about limits, taking feedback and flagging problems early (Leroy et al., 2015).",
        "Collaboration: leadership can come from people working together, and inclusive teams make room for quieter voices (Raelin, 2011; Roberson & Perry, 2022)."
      ] },
      { heading: "How I'd measure it", text: "Did people understand what was expected, feel comfortable asking questions, and get a fair chance to contribute? Those are things I can pay attention to now." },
      { heading: "What I took away", text: "Becoming a better leader means helping others while being willing to change my own approach." }
    ]
  },
  {
    id: "epidemiology-biostatistics-assignments",
    title: "Epidemiology and biostatistics problem sets",
    course: "HLSC 2P07",
    courseName: null,
    term: "Fall 2026",
    type: "Problem sets",
    format: "Solo",
    area: "Research",
    summary: "Worked through study design, disease frequency and descriptive statistics by hand, using real health examples.",
    tools: ["Study design", "Prevalence", "Descriptive statistics", "Box plots"],
    pdf: null,
    privateNote: "The answers aren't posted because the course is still running.",
    sections: [
      { heading: "What it covers", text: "Weekly assignments where each one builds a core research skill: recognising a study design, measuring how common a condition is, and describing a dataset with numbers and a chart." },
      { heading: "Examples", list: [
        "Study design: identifying a scenario that followed infants with and without a medication as a prospective cohort study, and explaining its strengths, like a clear time order between exposure and outcome.",
        "Disease frequency: calculating the prevalence of hypertension at baseline and after two years in a group of 1,250 people.",
        "Descriptive statistics: mean, sample standard deviation, median and quartiles for a set of cholesterol readings, plus a box plot."
      ] },
      { heading: "What I took away", text: "Doing the calculations step by step made the formulas make sense. It's the groundwork for my research proposal on physical activity and type 2 diabetes." }
    ]
  },
  {
    id: "t2d-physical-activity-proposal",
    title: "Physical activity and type 2 diabetes prevention",
    course: "HLSC 4P50",
    courseName: "Research Methods in Epidemiology",
    term: "Fall 2026",
    type: "Research proposal",
    format: "Solo",
    area: "Research",
    summary: "Proposing a study on whether adults with prediabetes who miss the 150-minute activity guideline are more likely to develop type 2 diabetes.",
    tools: ["Epidemiology", "Cohort design", "Literature review"],
    pdf: null,
    privateNote: "This proposal is still a work in progress, so the full text isn't shared yet.",
    stats: [["11% → 14%", "Ontario adults with prediabetes, 2015–2024"], ["58%", "lower diabetes incidence in the DPP lifestyle trial"], ["59", "cohort studies in a 2025 meta-analysis"]],
    sections: [
      { heading: "Research question", text: "Among adults with prediabetes in Ontario, is getting less than 150 minutes of physical activity per week associated with a higher risk of developing type 2 diabetes over five years, compared with getting at least 150 minutes?" },
      { heading: "Why it matters", text: "Prediabetes is becoming more common in Ontario, and it's a window where type 2 diabetes can still be prevented. Physical activity is one of the most practical things people can change." },
      { heading: "What the evidence shows", list: [
        "The Diabetes Prevention Program trial cut diabetes incidence by 58%, but it combined activity, diet and weight loss, so activity's own effect is unclear.",
        "Cohort studies in Spain and China link low activity to progression, but they used different populations and different ways of measuring activity.",
        "A 2025 meta-analysis of 59 cohort studies found that inactivity raised the odds of progression and moderate activity lowered them."
      ] },
      { heading: "The gap I'm addressing", text: "No Ontario study has tested whether meeting the 150-minute guideline itself is linked to progression. Using that clear threshold makes the results easy to interpret and ties them directly to Diabetes Canada's recommendations." }
    ]
  },

  /* ---------------- Winter 2026 ---------------- */
  {
    id: "trauma-informed-conversations",
    title: "Mental health conversations with trauma-informed care",
    course: "HLSC 3P25",
    courseName: "Mental Health & Addictions",
    term: "Winter 2026",
    type: "Workshop presentation",
    format: "Group",
    area: "Public health",
    summary: "Taught classmates a simple, trauma-informed way to support someone who's struggling: Reach Out, Ask & Listen, Refer.",
    tools: ["Trauma-informed care", "Scenario-based learning"],
    pdf: null,
    privateNote: "This was group work, so only a summary is shared.",
    stats: [["1 in 3", "Canadians will have a mental health problem"], ["4", "practice scenarios"]],
    sections: [
      { heading: "The goal", text: "Most people have no idea what to say when a friend texts at 1 a.m. saying they're not okay. Our workshop showed that you don't need to be a therapist. You need to make someone feel safe, not judged and in control." },
      { heading: "What we taught", list: [
        "Core principles: safety, trustworthiness, choice, collaboration and empowerment.",
        "A three-step framework: Reach Out with 'I' statements, Ask & Listen without fixing or minimising, then Refer and stay present.",
        "'Words matter': swapping 'just relax' for 'I'm here, take your time'.",
        "Campus, community and crisis resources, including 9-8-8."
      ] },
      { heading: "The activity", text: "Four groups each worked through a scenario: a late-night text, a withdrawn coworker, a friend using drinking to cope, and a sibling who won't leave their room. For each, they worked out what to say first, what never to say, and how to apply the framework." },
      { heading: "What I took away", text: "Practical scripts make a framework usable. People remember what they've practised." }
    ]
  },
  {
    id: "healthcare-worker-burnout-briefing-note",
    title: "Healthcare worker burnout: the case for a national strategy",
    course: "HLSC 3P21",
    courseName: "Issues in Canadian Health Policy",
    term: "Winter 2026",
    type: "Briefing note",
    format: "Solo",
    area: "Health policy",
    summary: "Advised a federal policy director on how to respond to record burnout in Canada's health workforce, and recommended a national strategy.",
    tools: ["Policy analysis", "Federal–provincial jurisdiction", "Briefing note format"],
    pdf: "files/healthcare-worker-burnout-briefing-note.pdf",
    stats: [["78.7%", "of public health workers met burnout criteria"], ["25%", "of healthcare workers planned to leave"], ["3", "policy options weighed"]],
    sections: [
      { heading: "The issue", text: "Burnout among Canadian healthcare workers has reached emergency levels. A 2024 study found 78.7% of public health workers met the criteria for burnout, and a 2025 study found a quarter of healthcare workers planned to leave, most often because of burnout. Canada has no national strategy for healthcare worker wellbeing." },
      { heading: "Options I weighed", list: [
        "A National Healthcare Worker Wellbeing Strategy: the most thorough, but slow and dependent on federal–provincial cooperation.",
        "Workload caps and less administrative burden: targets a main cause, but staffing law is provincial.",
        "Mandated peer support and mental health programs: quick and cheaper, but it treats symptoms, and stigma keeps uptake low."
      ] },
      { heading: "Recommendation", text: "Adopt the national strategy, starting with a federal, provincial and territorial meeting aimed at an initial agreement within 18 months, and roll out mandated mental health supports in the meantime as a bridge." },
      { heading: "What I took away", text: "Writing for a decision-maker means keeping it short, being honest about trade-offs, and ending with a clear recommendation." }
    ]
  },
  {
    id: "racialized-health-inequities-policy-paper",
    title: "Systemic racism and health inequities in Canada",
    course: "HLSC 3P21",
    courseName: "Issues in Canadian Health Policy",
    term: "Winter 2026",
    type: "Policy paper",
    format: "Solo",
    area: "Health policy",
    summary: "Argued that systemic racism is the main driver of health inequities for racialized Canadians, and proposed three policy changes to close the gap.",
    tools: ["Literature review", "Social determinants of health", "Policy analysis"],
    pdf: "files/racialized-health-inequities-policy-paper.pdf",
    stats: [["3", "policy changes proposed"], ["300+", "studies in the key meta-analysis cited"]],
    sections: [
      { heading: "Research question", text: "How do systemic racism and structural inequalities impact health outcomes for racialized populations in Canada, and what policy changes are most urgently needed to address these inequities?" },
      { heading: "What the literature shows", list: [
        "Racism, both interpersonal and systemic, is linked to poorer mental and physical health across more than 300 studies.",
        "It works largely through the social determinants of health: income, precarious work and housing. COVID-19 made those gaps impossible to ignore.",
        "Bias exists inside healthcare itself, from anti-Indigenous stereotyping to the death of Brian Sinclair after waiting more than 30 hours in a Winnipeg ER.",
        "Canada collects little race-based health data, which hides the scale of the problem."
      ] },
      { heading: "Three policy changes", list: [
        "Mandatory, standardised collection and public reporting of race-based health data.",
        "Mandatory anti-racism training for providers, with accountability and safe ways for patients to report discrimination.",
        "Sustained investment in housing, income supports and community health centres, designed with racialized communities."
      ] },
      { heading: "What I took away", text: "How to build an argument from evidence and answer its strongest counterargument: that universal programs alone would be enough." }
    ]
  },
  {
    id: "copecareconnect-workshop",
    title: "CopeCareConnect resilience workshop",
    course: "HLSC 3Q21",
    courseName: "Health Campaigns in Action",
    term: "Winter 2026",
    type: "Health campaign",
    format: "Group",
    area: "Public health",
    summary: "Planned, ran and evaluated a peer-led resilience workshop for first-year health sciences students, from creative brief to evaluation report.",
    tools: ["Creative brief", "Logic model", "Questionnaire design", "Likert data", "Excel"],
    pdf: null,
    privateNote: "This was a group project with three classmates, so only a summary is shared.",
    stats: [["27", "students evaluated"], ["78%", "made a resilience pledge"], ["6.2 / 7", "motivation to keep going"]],
    sections: [
      { heading: "The brief", text: "CopeCareConnect is a peer-led initiative at Brock that promotes resilience, social connection and mental health. As student ambassadors, our team of four designed a two-session workshop for first-year students in HLSC 1F90, ran it, and evaluated whether it worked." },
      { heading: "What we built", list: [
        "A creative brief with audience profiles, barriers, benefits, a logic model and measurable outcome targets.",
        "Two sessions: icebreakers, a resilience video, group reflection, scenarios, and a personal pledge on CopeCareConnect.ca.",
        "A short resilience video for the first session, with written documentation of how it was made.",
        "Follow-up emails between sessions to keep students engaged with their pledge.",
        "A questionnaire with checkbox, 7-point Likert and open-ended items."
      ] },
      { heading: "What we found", list: [
        "78% of participants made a pledge. 'Get outside every day' was by far the most popular.",
        "Students agreed the workshop improved their understanding of resilience (5.7 out of 7) and their confidence handling challenges (5.7 out of 7).",
        "Those who pledged were highly motivated to continue (6.2 out of 7) and reported almost no negative effects.",
        "The weak spot was knowing where to find resources (2.1 out of 4). We recommended having students explore and bookmark the website during the session."
      ] },
      { heading: "Limitations", text: "Social desirability bias was likely, since students answered right after the workshop with us in the room. And without a pre-workshop survey, we can't be certain the changes came from the workshop itself." }
    ]
  },
  {
    id: "mindfulness-training-reflection",
    title: "Mindfulness training: what actually stuck",
    course: "HLSC 3P25",
    courseName: "Mental Health & Addictions",
    term: "Winter 2026",
    type: "Reflection paper",
    format: "Solo",
    area: "Writing & reflection",
    summary: "An honest look at a mindfulness training I expected to dismiss, and the few practices I ended up using every week.",
    tools: ["Mindfulness practice", "Rogers (2016)"],
    pdf: null,
    privateNote: "The full reflection isn't shared because it's personal.",
    sections: [
      { heading: "Starting point", text: "I went into the course's mindfulness training seeing it as something to get through for credit. I read it alongside The Mindful Twenty-Something (Rogers, 2016) and wrote about what changed." },
      { heading: "What worked and what didn't", list: [
        "Belly breathing helped in stressful moments like presentations and midterms. It didn't make the stress disappear, but it took the edge off.",
        "'Chicken breathing' was oddly effective, mostly because it's funny and lifts my mood.",
        "Walking meditation felt awkward and I gave up partway. Noticing my own judgment about that turned out to be the lesson.",
        "The 'observing mind' idea was the hardest to connect with, and I said so."
      ] },
      { heading: "Critical view", text: "Mindfulness can help people pause before reacting, which matters for anxiety and addiction, but it's no substitute for therapy, medication or proper support. Not everyone has the time or circumstances to practise it either. I linked it to a guest lecture on social health and community, and to joining Toastmasters." },
      { heading: "What I took away", text: "Mindfulness isn't about making everything calm. It's about paying attention to what's happening now instead of worrying about what might go wrong later." }
    ]
  },
  {
    id: "learning-for-success-journal",
    title: "Learning journal: how I actually learn",
    course: "ADED 1P31",
    courseName: "Learning for Success",
    term: "Winter 2026",
    type: "Learning journal",
    format: "Solo",
    area: "Writing & reflection",
    summary: "Discovered most of my studying was passive, and rebuilt my habits around active learning, better research and real presentation practice.",
    tools: ["What? So What? Now What?", "Spaced repetition", "Reflective writing"],
    pdf: null,
    privateNote: "The full journal isn't shared because it includes personal details.",
    stats: [["5", "sessions reflected on"]],
    sections: [
      { heading: "The format", text: "A summative journal where each entry answers a directed question using What? So What? Now What?: what happened, why it matters, and what I'll do differently." },
      { heading: "What changed", list: [
        "Note-taking: typing everything on my laptop was mostly passive. I switched to rewriting ideas in my own words and spaced repetition.",
        "Research: sharper keywords in Omni, and mining reference lists instead of starting from scratch.",
        "Wellness: mapping my habits onto the eight dimensions of wellness and setting a goal for occupational wellness.",
        "Career: planned happenstance and chaos theory helped me see a change of direction as part of the process, not a setback.",
        "Presenting: practising alone, with a test audience and on video, and joining Toastmasters."
      ] },
      { heading: "What I took away", text: "The biggest gain was self-awareness: understanding how I learn, what wasn't working, and what to do about it." }
    ]
  },
  {
    id: "grievance-system-workplace-democracy",
    title: "Is the grievance system the key to workplace democracy?",
    course: "LABR 1P95",
    courseName: null,
    term: "Winter 2026",
    type: "Video forum presentation",
    format: "Solo",
    area: "Education & society",
    summary: "Argued that grievance procedures matter, but strikes, bargaining and organizing do far more to give workers a real voice.",
    tools: ["Ross & Savage, Building a Better World", "PowerPoint"],
    pdf: null,
    privateNote: "The slides aren't posted yet.",
    sections: [
      { heading: "My position", text: "Disagree. The grievance system is useful, but it's not the most important tool for democratizing work. True workplace democracy means a collective voice, not just a complaints process." },
      { heading: "The argument", list: [
        "Grievances are reactive. They only kick in after an employer has already broken the agreement.",
        "They replaced faster, more powerful tools like walkouts, which put immediate pressure on employers.",
        "They're bureaucratic, moving power from workers to lawyers, arbitrators and HR, which can make members passive.",
        "Strikes, collective bargaining, political action, rank-and-file organizing and equity committees do more to give workers a voice."
      ] },
      { heading: "What I took away", text: "How to take a clear position, back it with the textbook and lectures, and fit it into a short, structured video." }
    ]
  },

  /* ---------------- Fall 2025 ---------------- */
  {
    id: "phubbing-observation-study",
    title: "Phubbing: an observation study of students and their phones",
    course: "HLSC 3Q20",
    courseName: null,
    term: "Fall 2025",
    type: "Observational study",
    format: "Solo",
    area: "Research",
    summary: "Measured how often students ignore friends for their phones, and found it happens about every three minutes, and spreads.",
    tools: ["Structured observation", "Rating scale design", "Field data"],
    pdf: "files/phubbing-observation-study.pdf",
    stats: [["30 min", "of observation"], ["10", "phubbing episodes"], ["~3 min", "between episodes"]],
    sections: [
      { heading: "Research focus", text: "'Phubbing' means ignoring the people you're with in favour of your phone. I set out to measure how often it happens in real student groups, how long it lasts, and how friends react." },
      { heading: "Method", list: [
        "Three 10-minute observations of groups of 4–5 students in the library, the Hungry Badger and the Market food court.",
        "Timed each phone episode and rated disengagement on a 0–4 scale I defined, from a quick glance while still talking to completely silent on the phone.",
        "Recorded how the group reacted: kept talking to the phubber, carried on without them, or pulled out their own phones."
      ] },
      { heading: "Findings", list: [
        "10 episodes in 30 minutes, adding up to 4.5 minutes of phone time.",
        "Most episodes rated 1–3. One reached 4, with the person fully disconnected.",
        "Every group reacted the same way: people kept talking, but at least one other person picked up their phone too. That suggests phubbing is normalised, and that it spreads."
      ] },
      { heading: "Strengths and limits", text: "The 0–4 scale captured how disruptive each episode was, not just whether it happened. But I couldn't see what people were doing on their phones, and three groups can't represent all students." }
    ]
  },
  {
    id: "copecareconnect-pledge-reflection",
    title: "My CopeCareConnect pledge: going outside every day",
    course: "HLSC 3Q20",
    courseName: null,
    term: "Fall 2025",
    type: "Reflection",
    format: "Solo",
    area: "Writing & reflection",
    summary: "Kept a two-week resilience pledge to get outside every day, and broke down why it worked using Social Cognitive Theory.",
    tools: ["Social Cognitive Theory", "Behaviour change", "Resilience"],
    pdf: "files/copecareconnect-pledge-reflection.pdf",
    stats: [["14 days", "pledge period"]],
    sections: [
      { heading: "The pledge", text: "For two weeks I committed to going outside every day to cut screen time, get fresh air and walk. A few months later, I helped run a CopeCareConnect workshop myself." },
      { heading: "Why it worked", list: [
        "Expectations: I expected it to clear my head and help me feel calmer, which motivated me to do it.",
        "Behavioural capability: I already knew safe routes and how to dress for the weather.",
        "Self-efficacy: it was small enough that I was confident I could stick with it.",
        "Reinforcement: rewarding myself with games or a movie after each walk kept me consistent."
      ] },
      { heading: "What I took away", text: "Small daily actions changed my mood and energy. When I missed a day, I just picked it back up the next day. That's resilience in practice, and it's reciprocal determinism too: behaviour, mindset and environment feeding each other." }
    ]
  },
  {
    id: "work-life-school-balance-interview",
    title: "Balancing work, school and life: a qualitative study",
    course: "HLSC 3P37",
    courseName: "Qualitative Research in Health Sciences",
    term: "Fall 2025",
    type: "Qualitative research",
    format: "Pair project",
    area: "Research",
    summary: "Took a qualitative study from proposal to interview to findings, exploring how students juggle classes, jobs and life.",
    tools: ["Phenomenology", "Semi-structured interviews", "Transcription", "Field notes"],
    pdf: null,
    privateNote: "The transcript isn't shared to protect the participant's privacy.",
    stats: [["10–15", "participants in the proposed study"], ["~15 min", "interview, transcribed word for word"]],
    sections: [
      { heading: "The proposal", text: "With a partner, I proposed a phenomenological study: how do Canadian undergraduates experience and manage work-life balance? The sub-questions asked about the main challenges and the strategies that help. We planned in-depth interviews with 10–15 full-time students, following TCPS 2 ethics guidelines." },
      { heading: "The interview", list: [
        "Built a semi-structured guide with essential questions and follow-up probes.",
        "Explained the purpose, got consent to record, and made clear the participant could skip questions or stop at any time.",
        "Transcribed word for word with notes on pauses and reactions, then organised field notes by theme.",
        "Offered a mental health and wellness resource sheet at the end."
      ] },
      { heading: "Themes", list: [
        "Organisation and scheduling as the main strategy.",
        "Feeling there's no real balance, made worse by planning for life after graduation.",
        "Giving up personal time when everything piles up.",
        "Physical activity as the most helpful coping strategy, while breaks felt like they added stress.",
        "Advice for others: be realistic about how much you take on."
      ] },
      { heading: "Presenting it", text: "We showed a typical week as a comic strip (gym at 6 a.m., classes, a late shift, assignments at 3 a.m.) to make the trade-offs visible. Then we proposed strategies: protecting sleep, academic flexibility, financial support and accessible wellness services. We closed with future research on burnout over a semester, social support and school policies." },
      { heading: "What I took away", text: "Good follow-up questions are everything, consent and confidentiality matter in real research, and data lands better when an audience can feel it." }
    ]
  },
  {
    id: "toronto-income-crime-gis",
    title: "Neighbourhood income and crime density in Toronto",
    course: "HLSC 3Q90",
    courseName: null,
    term: "Fall 2025",
    type: "GIS research report",
    format: "Solo",
    area: "Research",
    summary: "Mapped income and crime across all 158 Toronto neighbourhoods and found the two patterns don't line up the way you'd expect.",
    tools: ["ArcGIS Pro", "Spatial join", "Choropleth mapping", "Excel", "Open data"],
    pdf: "files/toronto-income-crime-gis.pdf",
    stats: [["158", "neighbourhoods analysed"], ["49,432", "crime incidents mapped"], ["118×", "gap between lowest and highest crime density"]],
    sections: [
      { heading: "Research question", text: "How are median household income and major crime density spread across Toronto's 158 neighbourhoods, and do the two patterns line up? Crime exposure matters for public health because it's linked to stress, anxiety, less physical activity and chronic disease." },
      { heading: "Methods", list: [
        "Cleaned 2021 Census median after-tax income data and joined it to the City of Toronto's neighbourhood boundaries.",
        "Plotted 49,432 major crime incidents from 2023 (Toronto Police Service open data) and counted them per neighbourhood with a spatial join.",
        "Calculated crime density per km² and built two choropleth maps using natural breaks."
      ] },
      { heading: "Findings", list: [
        "Income varied almost threefold, from $27,200 to $61,600, with the highest-income areas mostly in the north.",
        "Crime density varied far more, from 12 to 1,422 crimes per km², concentrated in the downtown core.",
        "The lowest-income neighbourhoods didn't have the highest crime density, which points to factors like population density, commercial activity and transit."
      ] },
      { heading: "Limitations", text: "A cross-sectional, neighbourhood-level design can't show cause and effect, and there's a risk of the ecological fallacy. Income and crime data came from different years, and only reported crimes are counted." }
    ]
  },
  {
    id: "gis-postal-codes-greenspace",
    title: "GIS assignments: green space, postal codes and buffers",
    course: "HLSC 3Q90",
    courseName: null,
    term: "Fall 2025",
    type: "GIS assignments",
    format: "Solo",
    area: "Research",
    summary: "Framed a research question on green space and heart disease, then used buffers to show how a 'neighbourhood' changes with distance.",
    tools: ["ArcGIS Pro", "Buffers", "Forward sortation areas", "Open data"],
    pdf: "files/gis-postal-codes-greenspace.pdf",
    stats: [["416", "postal codes mapped"], ["500 m vs 1 km", "buffers compared"]],
    sections: [
      { heading: "Assignment 1: the research question", list: [
        "Question: is living closer to green space linked to lower rates of cardiovascular disease among Toronto adults aged 45 and older?",
        "Evidence: cohort studies link nearby green space to fewer cardiovascular deaths, but most come from Europe or the US, not large Canadian cities.",
        "Data I'd use: the City of Toronto parks shapefile and Public Health Ontario chronic disease mortality data.",
        "I also mapped changes in infant mortality across Europe from 1960 to 2020."
      ] },
      { heading: "Assignment 2: postal codes and buffers (the PDF)", list: [
        "Mapped 416 postal codes and found most clustered in East York around Danforth Avenue.",
        "Counted 312 locations inside the M4C forward sortation area, and measured a 2.97 km distance between two points.",
        "Drew 500 m and 1 km buffers around each location and compared how much green space each captured."
      ] },
      { heading: "My call", text: "For a study on green space and physical activity, I'd use the 1 km buffer. The 500 m buffer around one location captured almost no parks, while 1 km included Downsview Park, a realistic walk away." }
    ]
  },
  {
    id: "video-games-benefits-essay",
    title: "Playing video games and their benefits",
    course: "ADED 1P33",
    courseName: "Scholarly Writing for Adult Learners",
    term: "Fall 2025",
    type: "Argumentative essay",
    format: "Solo",
    area: "Writing & reflection",
    summary: "Built a research-backed case, from outline to final paper, that gaming in moderation strengthens thinking, connection and resilience.",
    tools: ["Thesis & outline", "Argumentative writing", "APA style"],
    pdf: "files/video-games-benefits-essay.pdf",
    stats: [["3", "drafts: outline, essay, final paper"], ["5", "research sources"]],
    sections: [
      { heading: "Thesis", text: "Gaming isn't a harmful distraction. Played in moderation, it supports learning, thinking skills, social life, emotional health and stress relief." },
      { heading: "The argument", list: [
        "Thinking skills: action games train attention and spatial awareness, and strategy and puzzle games build planning and pattern-finding (Bediou et al., 2018).",
        "Connection: online games work like community spaces where real friendships form, especially for people who find in-person socialising hard (Cole & Griffiths, 2007).",
        "Stress relief: the focused 'flow' of commercial games can lower stress and lift mood (Pallavicini et al., 2021).",
        "Resilience: failing and retrying teaches a growth mindset (Granic et al., 2014).",
        "Learning: clear goals and fast feedback make games strong teaching tools (Connolly et al., 2012).",
        "Moderation: the problem is excessive play, not gaming itself."
      ] },
      { heading: "How I built it", text: "In three steps across the term: a thesis statement and outline, a short essay (the PDF here), and a longer final paper that added sections on stress relief and resilience." },
      { heading: "What I took away", text: "Writing about something I actually care about made it easier to practise structuring an argument and backing every claim with evidence." }
    ]
  },

  /* ---------------- Summer 2025 ---------------- */
  {
    id: "biostatistics-ii-r-analyses",
    title: "Biostatistics II: ANOVA and regression in R",
    course: "HLSC 3P07",
    courseName: "Biostatistics II",
    term: "Summer 2025",
    type: "Data analysis assignments",
    format: "Solo",
    area: "Research",
    summary: "Tested real health hypotheses in R with ANOVA and logistic regression, checking assumptions before trusting any p-value.",
    tools: ["R / RStudio", "Two-way ANOVA", "Logistic regression", "ANCOVA", "NHANES"],
    pdf: null,
    privateNote: "Summary only. The assignments aren't posted.",
    stats: [["OR 0.997", "per gram of birthweight (BPD risk)"], ["p = 0.017", "restlessness vs sleep hours"]],
    sections: [
      { heading: "Overview", text: "Applied statistics assignments where every analysis started with a hypothesis, checked the test's assumptions and ended with a plain-language conclusion." },
      { heading: "Examples", list: [
        "Two-way ANOVA on sleep: restlessness had a significant effect on sleep hours (p = 0.017), but concentration level and the interaction didn't. I flagged that the equal-variance and normality assumptions were shaky.",
        "Logistic regression on bronchopulmonary dysplasia (BPD) in newborns: after adjusting for gestational age, each extra gram of birthweight lowered the odds of BPD (OR 0.997, p < 0.001). Predicted risk fell from about 75% at 700 g to 4% at 1,700 g.",
        "Labs on linear regression, ANCOVA and logistic models, plus a group analysis of alcohol use in the NHANES survey."
      ] },
      { heading: "What I took away", text: "How to get from a raw dataset to a defensible conclusion in R, and why checking assumptions matters as much as the p-value." }
    ]
  },
  {
    id: "teamwork-healthcare-reflection",
    title: "Teamwork as the heart of healthcare",
    course: "HLSC 3P94",
    courseName: null,
    term: "Summer 2025",
    type: "Reflection essay",
    format: "Solo",
    area: "Writing & reflection",
    summary: "Connected team theory to what I saw volunteering in a clinic, and to why I'm drawn to fixing problems like that in health administration.",
    tools: ["Team typologies (Mach et al., 2021)", "Strategic planning", "Motivation"],
    pdf: "files/teamwork-healthcare-reflection.pdf",
    sections: [
      { heading: "The shift", text: "Before this course I thought teamwork just meant people doing their jobs side by side. Mach et al. (2021) and the course material changed that: teamwork is about interdependence, communication and trust." },
      { heading: "Key ideas", list: [
        "Teams range from loosely 'remote-controlled' groups to fully interdependent ones like surgical teams, and the type has to fit the task.",
        "Interdependence is powerful, but it's costly when roles overlap or communication breaks down.",
        "In strategic planning, teams are how new systems and policies actually stick in a hospital."
      ] },
      { heading: "A personal connection", text: "At a clinic where I volunteered, roles barely communicated. Patients were asked the same questions repeatedly, and a medication list got mixed up between a nurse and admin staff. Seeing the patient's frustration made the theory concrete." },
      { heading: "What I took away", text: "I'm interested in healthcare administration because of moments like that: clear roles, open communication and well-run virtual teams, including ones that support rural care." }
    ]
  },
  {
    id: "sunnybrook-leadership-gap-swot",
    title: "Addressing the leadership gap at Sunnybrook",
    course: "HLSC 3P94",
    courseName: null,
    term: "Summer 2025",
    type: "Strategic analysis",
    format: "Group",
    area: "Health policy",
    summary: "Diagnosed Sunnybrook's post-pandemic leadership shortage with a SWOT analysis and laid out four strategies to rebuild it.",
    tools: ["SWOT analysis", "Strategic planning", "LEADS framework"],
    pdf: null,
    privateNote: "This was a group project with two classmates, so only a summary is shared.",
    stats: [["10,000+", "staff across 10 sites"], ["4", "recommendations"]],
    sections: [
      { heading: "The problem", text: "Many experienced managers at Sunnybrook Health Sciences Centre retired or left during COVID-19, leaving a shortage of seasoned leaders. At the same time, a younger, purpose-driven workforce was eager to step up." },
      { heading: "SWOT highlights", list: [
        "Strengths: in-house leadership programs, a University of Toronto affiliation, and a large, diverse workforce to develop leaders from.",
        "Weaknesses: lost leaders, retention problems, tight public budgets and patchy succession planning.",
        "Opportunities: business school partnerships, a motivated younger workforce, analytics and post-pandemic funding.",
        "Threats: burnout, competition for talent, and risks to patient care and stakeholder trust."
      ] },
      { heading: "Recommendations", list: [
        "An organisation-wide succession planning strategy.",
        "Expanded mentoring and coaching that pairs emerging leaders with experienced ones.",
        "Executive education with the Rotman School of Management.",
        "Performance dashboards to track leadership development."
      ] }
    ]
  },

  /* ---------------- Winter 2025 ---------------- */
  {
    id: "prenatal-antibiotics-obesity-appraisal",
    title: "Critical appraisal: prenatal antibiotics and childhood obesity",
    course: "HLSC 2P27",
    courseName: null,
    term: "Winter 2025",
    type: "Critical appraisal",
    format: "Solo",
    area: "Research",
    summary: "Picked apart a large cohort study linking antibiotics in pregnancy to childhood obesity: what it gets right, and what could be misleading.",
    tools: ["Critical appraisal", "Cohort study design", "Bias & confounding"],
    pdf: "files/prenatal-antibiotics-obesity-appraisal.pdf",
    stats: [["~46,000", "mothers in the cohort"], ["1959–65", "when the data were collected"]],
    sections: [
      { heading: "The study", text: "Wang et al. (2018) used the US Collaborative Perinatal Project, following about 46,000 women and their children, to test whether antibiotic use in pregnancy, especially repeated use or use in the second trimester, raised the risk of overweight or obesity at ages 4 and 7." },
      { heading: "Strengths", list: [
        "A clear, focused research question.",
        "A very large sample, which reduces the chance of random results.",
        "Exposure measured repeatedly across pregnancy."
      ] },
      { heading: "Weaknesses", list: [
        "Data from the 1960s may not reflect today's antibiotics, healthcare or lifestyles.",
        "Self-reported use brings a risk of recall and misclassification bias.",
        "No detail on dose, duration or why antibiotics were prescribed, so the infection itself could be driving the link.",
        "Obesity was measured only at ages 4 and 7."
      ] },
      { heading: "My suggestions", text: "Use recent data and prescription records, record the type and severity of infection, compare antibiotic classes, and follow children into adolescence." }
    ]
  },
  {
    id: "obesity-surveillance-brief-ontario",
    title: "Health surveillance brief: obesity among adults in Ontario",
    course: null,
    courseName: null,
    term: "Winter 2025",
    type: "Surveillance brief",
    format: "Solo",
    area: "Public health",
    summary: "Briefed clinicians on who is most affected by obesity in Ontario, where, and how fast it's growing, using person, place and time.",
    tools: ["Descriptive epidemiology", "Person, place, time", "Health surveillance"],
    pdf: "files/obesity-surveillance-brief-ontario.pdf",
    stats: [["24% → 31%", "adult obesity in Ontario, 2010–2019"], ["38%", "projected by 2035"]],
    sections: [
      { heading: "Purpose", text: "To give physicians and nurses a clear picture of obesity among Ontario adults, so they can respond with better prevention and treatment." },
      { heading: "Person, place, time", list: [
        "Person: highest among adults aged 45–64. It's more common in low-income neighbourhoods (about 40% vs 25%) and among some racialized groups.",
        "Place: walkable neighbourhoods have lower rates. Areas full of fast food and short on affordable healthy food have higher rates.",
        "Time: rates rose from about 24% in 2010 to 31% in 2019, with projections of 38% by 2035."
      ] },
      { heading: "Recommendations", text: "Measure BMI routinely, use non-stigmatising language (weight stigma keeps people from seeking care), and advocate for walkable neighbourhoods and low-cost recreation in low-income areas." }
    ]
  },
  {
    id: "covid-omicron-video-analysis",
    title: "Critical analysis: Canada's Omicron response video",
    course: null,
    courseName: null,
    term: "Winter 2025",
    type: "Critical media analysis",
    format: "Solo",
    area: "Health policy",
    summary: "Assessed how clearly and honestly a federal health minister explained Canada's Omicron travel bans and booster push.",
    tools: ["Health communication", "Source evaluation", "Outbreak history"],
    pdf: null,
    privateNote: "Summary only. The full analysis isn't posted.",
    stats: [["2", "past outbreaks compared (H1N1, Ebola)"]],
    sections: [
      { heading: "The video", text: "A CBC News interview with then-Health Minister Jean-Yves Duclos on Canada's response to the Omicron variant: travel bans, stricter airport testing and booster shots." },
      { heading: "What I assessed", list: [
        "Clarity: calm and professional, but full of jargon like 'genomic sequencing', and no visuals, even though visuals improve health literacy.",
        "Credibility: a reliable official source, but government messaging tends to present its own actions favourably.",
        "Accuracy: mostly correct, but the claim that the travel bans were purely evidence-based conflicted with WHO's warnings against them.",
        "Context: compared with travel bans during H1N1 and the 2014 Ebola outbreak, which hurt affected countries without stopping the spread."
      ] },
      { heading: "What I took away", text: "Clear, honest communication is what gets people to follow public health guidance, and bringing in independent experts would have made this message stronger." }
    ]
  },

  /* ---------------- Fall 2024 ---------------- */
  {
    id: "health-equity-reflective-portfolio",
    title: "Health equity and justice: a reflective portfolio",
    course: "HLSC 2P21",
    courseName: null,
    term: "Fall 2024",
    type: "Reflective portfolio + lesson plan",
    format: "Solo",
    area: "Public health",
    summary: "Traced how racism, colonization and Medicare's history shape health in Canada, and designed a lesson on Indigenous health equity.",
    tools: ["Social determinants of health", "Cultural safety", "Lesson design"],
    pdf: "files/health-equity-reflective-portfolio.pdf",
    stats: [["3", "critical thinking assignments connected"], ["90 min", "lesson plan"]],
    sections: [
      { heading: "Overview", text: "My final portfolio for a course on health equity and justice. It connects three critical thinking assignments, on art as advocacy, the legacy of residential schools and the creation of Medicare, around one idea: addressing inequity in healthcare." },
      { heading: "What it covers", list: [
        "Racism as a health threat, from patients' pain being dismissed to the case of Yosif Al-Hasnawi, a Brock student whose death could have been prevented.",
        "How colonization and residential schools still shape First Nations, Métis and Inuit health, including the lack of clean water in many communities.",
        "Canada's biggest healthcare challenges, wait times and unequal access, with solutions like preventive care, telehealth and investment in housing and education."
      ] },
      { heading: "The lesson plan", text: "'Indigenous Health and the Path to Equity': 90 minutes with a short video, a talk on historical trauma and cultural safety, group case discussions, and a role-play where students design a culturally safe healthcare plan with a community." },
      { heading: "What I took away", text: "Health equity isn't just about policies. It's about people, and it takes both systemic change and personal accountability." }
    ]
  },
  {
    id: "unemployment-health-job-fair-observation",
    title: "Unemployment and health: a job fair observation",
    course: "HLSC 2P21",
    courseName: null,
    term: "Fall 2024",
    type: "Field observation",
    format: "Solo",
    area: "Public health",
    summary: "Went to a packed local job fair and saw the social determinants of health up close in the people waiting in line.",
    tools: ["Field observation", "Social determinants of health"],
    pdf: null,
    privateNote: "Summary only. The full write-up isn't posted, to protect the people I spoke with.",
    sections: [
      { heading: "What I observed", text: "A job fair at the Pen Centre in St. Catharines drew people of every age. The lines for retail interviews were far longer than for fast food, and older job seekers mostly went to retail. A few people agreed to tell me how being out of work was affecting them." },
      { heading: "Connecting it to the theory", list: [
        "Employment and income showed up clearly as social determinants, affecting food, stress and mental health.",
        "Many people were searching alone, without a support network, which likely added to their anxiety.",
        "It also challenged the framework: age and immigration status shaped people's experience beyond income alone."
      ] },
      { heading: "What I took away", text: "How deeply I empathise with people facing job insecurity, plus practice in careful observation and in linking what I see to a framework." }
    ]
  },
  {
    id: "sleep-behaviour-change-reflection",
    title: "A better sleep, a better me",
    course: "HLSC 2P49",
    courseName: null,
    term: "Fall 2024",
    type: "Behaviour change project",
    format: "Solo",
    area: "Writing & reflection",
    summary: "Fixed my sleep schedule over a term, then used health behaviour theory to explain why it finally worked.",
    tools: ["Self-efficacy", "Transtheoretical Model", "Habit stacking"],
    pdf: "files/sleep-behaviour-change-reflection.pdf",
    stats: [["7–8 hrs", "consistent sleep reached"]],
    sections: [
      { heading: "The change", text: "For HLSC 2P49 I changed one real health behaviour for the term: sleeping earlier and cutting screen time before bed. I tracked it, compared notes with a classmate, and reflected on it using course theory." },
      { heading: "What made it stick", list: [
        "Self-efficacy: believing I could actually change kept me consistent.",
        "Connecting the habit to bigger goals, like getting to school early and studying before class (Clear, 2018).",
        "Changing my environment: putting my phone away before brushing my teeth, a form of habit stacking.",
        "Small wins, like waking up rested enough to finish an assignment before breakfast."
      ] },
      { heading: "What I took away", text: "Staying up late was partly a way of avoiding stress about unfinished work. Small, intentional changes added up to better energy, mood and productivity." }
    ]
  },
  {
    id: "west-nile-virus-immune-response",
    title: "The immune response to West Nile virus",
    course: null,
    courseName: null,
    term: "Fall 2024",
    type: "Science paper",
    format: "Solo",
    area: "Public health",
    summary: "Explained how the body fights West Nile virus, the tricks the virus uses to escape, and how the disease is prevented and treated.",
    tools: ["Immunology", "Infectious disease", "Prevention"],
    pdf: "files/west-nile-virus-immune-response.pdf",
    sections: [
      { heading: "Innate and adaptive defence", list: [
        "Innate: physical barriers, macrophages and dendritic cells releasing cytokines, natural killer cells, type I interferons and the complement system.",
        "Adaptive: B cells producing neutralising antibodies, cytotoxic T cells destroying infected cells, and immune memory."
      ] },
      { heading: "How the virus escapes", text: "By hiding inside cells, disrupting immune signalling, blocking apoptosis, manipulating the unfolded protein response, and crossing the blood-brain barrier, which can lead to encephalitis and meningitis." },
      { heading: "Prevention and treatment", text: "Bite prevention and removing standing water where mosquitoes breed, supportive care for severe cases, and the state of vaccine research. There's still no human vaccine, though horses have one." },
      { heading: "What I took away", text: "How immunology connects to public health: understanding how a virus evades the body explains why prevention matters so much." }
    ]
  },
  {
    id: "dietary-analysis",
    title: "Personal dietary analysis",
    course: "HLSC 2P91",
    courseName: null,
    term: "Fall 2024",
    type: "Nutrition analysis",
    format: "Solo",
    area: "Public health",
    summary: "Tracked my own diet against Canadian nutrient recommendations, found the gaps, and built a realistic plan to close them.",
    tools: ["Dietary Reference Intakes", "AMDR", "Diet analysis software"],
    pdf: null,
    privateNote: "The full analysis isn't shared because it includes personal health details.",
    sections: [
      { heading: "Overview", text: "I recorded my food intake, ran it through diet analysis software, and compared every macronutrient, vitamin and mineral with the recommended intakes." },
      { heading: "What I looked at", list: [
        "Calories from carbohydrate, fat and protein against the Acceptable Macronutrient Distribution Ranges.",
        "Fibre, sugar, omega-3 and saturated fat, and why each matters.",
        "Essential amino acids, vitamins (A, B, C, D, E) and minerals (calcium, magnesium, iron, zinc and more)."
      ] },
      { heading: "The plan", text: "A practical day of eating to close the gaps, like more fibre, omega-3 from fish, calcium and vitamin D, and less sugar and saturated fat. A related exercise worked out how much of one food you'd need to meet Health Canada's omega-3 recommendation." },
      { heading: "What I took away", text: "Turning nutrient tables into everyday food choices is the hard part, and the part that actually matters." }
    ]
  }
];
