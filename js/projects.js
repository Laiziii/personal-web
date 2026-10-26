/* =========================================================
   PORTFOLIO DATA — one entry per project, newest first.
   To add a project, copy an entry and edit it.
   - pdf:  path to a file in /files, or null for summary-only
   - privateNote: shown instead of a download when pdf is null
   - sections: rendered in order on the project page.
     Each has a heading and either "text" (a paragraph) or "list" (bullets).
   ========================================================= */
window.PROJECTS = [
  {
    id: "akaza-public-pedagogy",
    title: "Akaza, judgment and public pedagogy",
    course: "ADED 3P94",
    courseName: null,
    term: "Fall 2026",
    type: "Presentation",
    format: "Solo",
    area: "Education & society",
    summary: "How an anime villain's backstory changed the way I judge people, and what that says about popular culture as a teacher.",
    tools: ["PowerPoint", "Jubas, Taber & Brown (2015)"],
    pdf: null,
    privateNote: "The slides aren't posted yet. A PDF version is coming soon.",
    sections: [
      { heading: "Overview", text: "A presentation on Demon Slayer: Infinity Castle (2025) and the character Akaza. I started out seeing him only as the villain who killed Rengoku. The film then shows his human past as Hakuji, and that reversal became the lesson of the talk: you can condemn what someone did and still try to understand how they got there." },
      { heading: "What I covered", list: [
        "Hakuji's story: stealing medicine for a sick father, being punished instead of helped, finding a new life, then losing it to a poisoning.",
        "How his wish to protect people turned into an obsession with strength after that loss.",
        "My own shift from judging the action to getting curious about the story behind it.",
        "A real-world link: news stories about people stealing necessities like baby formula, and pausing to consider desperation before judging."
      ] },
      { heading: "Theory", text: "Jubas, Taber and Brown argue that popular culture does more than entertain. Audiences make meaning from stories and use characters to reflect on themselves. I used that to explain why a widely watched anime can put questions about poverty, grief and punishment in front of people who would never study them in a classroom." },
      { heading: "What I took away", text: "Understanding is not the same as excusing. It's a small idea, but the story made it stick in a way a lecture probably wouldn't have." }
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
    summary: "A critical response to a rural hospice outreach program, asking who it actually reaches and how it knows it's working.",
    tools: ["Community development", "Adult learning theory", "2021 Census"],
    pdf: "files/hospice-palliative-outreach-critical-discourse.pdf",
    sections: [
      { heading: "Overview", text: "A response to a guest presentation on Haldimand-Norfolk Community Senior Support Services' Hospice Palliative Care Outreach program. It offers free support to people with a life-limiting illness and their families, including care planning, caregiver support, volunteer respite, grief groups and safeTALK suicide alertness training." },
      { heading: "Strengths I identified", list: [
        "It works alongside clinical care, covering the emotional and family side of serious illness.",
        "It shows community development through place, interaction, change and social capital, especially volunteer time and local trust.",
        "Volunteer training, grief groups and safeTALK follow adult learning principles: relevant, self-directed and immediately useful."
      ] },
      { heading: "Critical questions", list: [
        "Reach: the region covers about 2,848 km², so long travel, transport and internet access may limit who can use it. Wait times and unmet requests aren't reported.",
        "Participation: it's unclear how much clients and caregivers shape the program, and it leans heavily on unpaid volunteers.",
        "Measuring success: free services and referral routes are assets, but there's no public evidence of outcomes like caregivers feeling less isolated."
      ] },
      { heading: "What I suggested", text: "Rotating sessions in smaller communities, private meeting space through libraries or community centres, phone and virtual options, a transportation partnership, local community ambassadors, and a client and caregiver advisory group, all tested with residents first." }
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
    summary: "An analysis of Bridges Niagara's peer-led vaccine education for newcomers, with recommendations to extend its reach.",
    tools: ["PowerPoint", "Knowles (1980)", "Putnam (2000)"],
    pdf: null,
    privateNote: "The slides aren't posted yet. A PDF version is coming soon.",
    sections: [
      { heading: "Overview", text: "A look at Bridges Niagara Immigrant and Refugee Services' Peer-to-Peer Vaccine Education and Outreach Program, which gives newcomers in Niagara culturally and linguistically appropriate information about COVID-19 and vaccines, delivered by peers who have been through settling in themselves." },
      { heading: "How I analysed it", list: [
        "Community: place, interaction, change and social capital, with peers acting as a bridge to mainstream health services.",
        "Local need: language and cultural barriers between newcomers and health information.",
        "Adult education principles (Knowles): need to know, self-direction, life experience, relevance, and trust and culture."
      ] },
      { heading: "What I'd change", list: [
        "Widen the topics to flu, cancer screening and mental health.",
        "Train and recognise peer educators so they build skills too.",
        "Offer evening, weekend and online sessions for working adults.",
        "Partner with public health and libraries for wider reach."
      ] },
      { heading: "My verdict", text: "A medium to strong community: newcomers and established residents learn together and the program connects to wider services, but it depends on funding and volunteers, and its reach beyond the agency's own network is unclear." }
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
    summary: "A short reflection on four leadership values I want to practise: listening, empathy, self-awareness and collaboration.",
    tools: ["Servant leadership", "Authentic leadership", "Leaderful practice", "Inclusive leadership"],
    pdf: null,
    privateNote: "The full reflection isn't shared because it includes personal details.",
    sections: [
      { heading: "Overview", text: "A reflection on what leadership means to me before I hold any formal leadership role. It connects four values to course theory and to everyday situations like group assignments and working on a team." },
      { heading: "The four values", list: [
        "Listening: asking questions instead of assuming I understand, and being open to hearing something unexpected (Spears, 2005).",
        "Empathy: remembering people have lives outside the place I know them, while keeping responsibilities fair.",
        "Self-awareness: being honest about my limits, accepting feedback and flagging problems early (Leroy et al., 2015).",
        "Collaboration: leadership can come from people working together, and inclusive teams make room for quieter voices (Raelin, 2011; Roberson & Perry, 2022)."
      ] },
      { heading: "How I'd measure it", text: "Did people understand what was expected, feel comfortable asking questions, and get a fair chance to contribute? Those are things I can pay attention to now." }
    ]
  },
  {
    id: "epidemiology-biostatistics-assignments",
    title: "Epidemiology and biostatistics assignments",
    course: "HLSC 2P07",
    courseName: null,
    term: "Fall 2026",
    type: "Problem sets",
    format: "Solo",
    area: "Research",
    summary: "Weekly work on study design, measures of disease frequency and descriptive statistics, using real health examples.",
    tools: ["Study design", "Prevalence & incidence", "Descriptive statistics", "Box plots"],
    pdf: null,
    privateNote: "The answers aren't posted because the course is still running.",
    sections: [
      { heading: "Overview", text: "A set of assignments from a health research course where each week builds a core skill: recognising a study design, calculating how common a condition is, and describing a dataset with numbers and a chart." },
      { heading: "What I worked through", list: [
        "Identifying a study design: a scenario following infants who did and didn't receive a medication was a prospective cohort study, and I explained its strengths, like a clear order between exposure and outcome.",
        "Measures of disease frequency: calculating the prevalence of hypertension at baseline and after two years in a group of 1,250 people.",
        "Descriptive statistics by hand: mean, sample standard deviation, median and quartiles for a set of cholesterol readings, plus a box plot."
      ] },
      { heading: "What I took away", text: "Doing the calculations step by step made the formulas make sense, and it's the groundwork for the research proposal I'm developing on physical activity and type 2 diabetes." }
    ]
  },
  {
    id: "t2d-physical-activity-proposal",
    title: "Physical activity and type 2 diabetes prevention",
    course: null,
    courseName: null,
    term: "2026",
    type: "Research proposal",
    format: "Solo",
    area: "Research",
    summary: "A proposal asking whether adults with prediabetes who miss the 150-minute activity guideline are more likely to develop type 2 diabetes.",
    tools: ["Epidemiology", "Research design"],
    pdf: null,
    privateNote: "This proposal is still a work in progress, so the full text isn't shared yet.",
    sections: [
      { heading: "Research question", text: "Among Ontario adults aged 40–64 with prediabetes, do those who don't meet the recommended 150 minutes of physical activity per week have a higher five-year incidence of type 2 diabetes than those who do?" },
      { heading: "Why it matters", text: "Prediabetes is a window where type 2 diabetes can still be prevented. Physical activity is one of the most practical things people can change, so knowing how much the guideline matters for this group could help target prevention." },
      { heading: "The pieces of the question", list: [
        "Population: Ontario adults aged 40–64 with prediabetes.",
        "Exposure: not meeting 150 minutes of physical activity per week.",
        "Comparison: adults who meet the guideline.",
        "Outcome: new type 2 diabetes diagnoses over five years."
      ] }
    ]
  },
  {
    id: "trauma-informed-conversations",
    title: "Mental health conversations with trauma-informed care",
    course: "HLSC 3P25",
    courseName: "Mental Health & Addictions",
    term: "Winter 2026",
    type: "Workshop presentation",
    format: "Group",
    area: "Public health",
    summary: "A class workshop teaching a simple way to support someone who's struggling: Reach Out, Ask & Listen, Refer.",
    tools: ["Trauma-informed care", "Scenario-based learning"],
    pdf: null,
    privateNote: "This was group work, so only a summary is shared.",
    sections: [
      { heading: "Overview", text: "An interactive workshop for classmates on having mental health conversations. The point was that you don't need to be a therapist. You need to show up in a way that makes someone feel safe, not judged and in control." },
      { heading: "What it covered", list: [
        "Core principles: safety, trustworthiness, choice, collaboration and empowerment.",
        "A three-step framework: Reach Out with 'I' statements, Ask & Listen without fixing or minimising, then Refer and stay present.",
        "'Words matter': swapping phrases like 'just relax' for 'I'm here, take your time'.",
        "Why it matters: 1 in 3 Canadians will experience a mental health problem, and 75% of them begin by age 24."
      ] },
      { heading: "The activity", text: "Four groups each got a scenario (a late-night text, a withdrawn coworker, a friend using drinking to cope, a sibling who won't leave their room) and worked out what to say first, what not to say, and how to apply the framework. It closed with campus, community and crisis resources, including 9-8-8." }
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
    summary: "A briefing note to a federal policy director weighing three responses to burnout in Canada's health workforce.",
    tools: ["Policy analysis", "Federal–provincial jurisdiction"],
    pdf: "files/healthcare-worker-burnout-briefing-note.pdf",
    sections: [
      { heading: "The issue", text: "Burnout among Canadian healthcare workers has reached emergency levels. One 2024 study found 78.7% of public health workers met the criteria for burnout, and a 2025 study found a quarter of healthcare workers planned to leave their jobs, with burnout the most common reason. Canada has no national strategy for healthcare worker wellbeing." },
      { heading: "Options I weighed", list: [
        "A National Healthcare Worker Wellbeing Strategy: the most thorough, but slow and dependent on federal–provincial cooperation.",
        "Workload caps and less administrative burden: targets a main cause, but staffing law is provincial.",
        "Mandated peer support and mental health programs: quick and cheaper, but treats symptoms and uptake is held back by stigma."
      ] },
      { heading: "Recommendation", text: "Adopt the national strategy, starting with a federal, provincial and territorial meeting aimed at an initial agreement within 18 months, and roll out mandated mental health supports in the meantime as a bridge." },
      { heading: "What I took away", text: "How to write for someone who has to make a decision: keep it short, be honest about trade-offs, and end with a clear recommendation." }
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
    summary: "A policy paper arguing that systemic racism drives health inequities for racialized Canadians, with three policy changes to address it.",
    tools: ["Literature review", "Social determinants of health"],
    pdf: "files/racialized-health-inequities-policy-paper.pdf",
    sections: [
      { heading: "Research question", text: "How do systemic racism and structural inequalities impact health outcomes for racialized populations in Canada, and what policy changes are most urgently needed to address these inequities?" },
      { heading: "What the literature showed", list: [
        "Racism, both interpersonal and systemic, is linked to poorer mental and physical health.",
        "It works largely through the social determinants of health: income, precarious work and housing. COVID-19 made those gaps impossible to ignore.",
        "Bias inside healthcare itself, including anti-Indigenous and anti-Black racism.",
        "Canada collects little race-based health data, which hides the scale of the problem."
      ] },
      { heading: "Three policy changes", list: [
        "Mandatory, standardised collection and public reporting of race-based health data.",
        "Mandatory anti-racism training for healthcare providers, with real accountability and safe ways for patients to report discrimination.",
        "Sustained investment in the social determinants of health, designed with racialized communities."
      ] },
      { heading: "What I took away", text: "Building an argument from evidence and answering the strongest counterargument, that universal programs alone would be enough." }
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
    summary: "Planned, ran and evaluated a two-session peer-led resilience workshop for first-year health sciences students.",
    tools: ["Creative brief", "Logic model", "Questionnaire design", "Excel"],
    pdf: null,
    privateNote: "This was a group project with three classmates, so only a summary is shared.",
    sections: [
      { heading: "Overview", text: "CopeCareConnect is a peer-led initiative at Brock that promotes resilience, social connection and mental health. As student ambassadors, our team of four designed and ran a two-session workshop for first-year students in HLSC 1F90, then evaluated whether it worked." },
      { heading: "What we did", list: [
        "Wrote a creative brief: audience profiles, barriers, benefits, a logic model and outcome targets.",
        "Ran two sessions with a resilience video, group reflection, scenarios, and a personal pledge on CopeCareConnect.ca.",
        "Planned a short resilience video for the first session and wrote up how it was made.",
        "Sent follow-up emails between sessions to keep people engaged with their pledge.",
        "Designed a questionnaire and evaluated the workshop with 27 participants."
      ] },
      { heading: "What we found", list: [
        "78% of participants made a pledge. 'Get outside every day' was the most popular.",
        "Students agreed the workshop improved their understanding of resilience (5.7 out of 7) and their confidence handling challenges (5.7 out of 7).",
        "Those who pledged were very motivated to keep going (6.2 out of 7).",
        "The weak spot was knowing where to find resources (2.1 out of 4), so we recommended having students explore and bookmark the site during the session."
      ] },
      { heading: "Limitations", text: "Social desirability bias was likely, since students answered right after the workshop, and with no pre-workshop survey we can't be sure the changes came from the workshop itself." }
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
    summary: "An honest look at a mindfulness training I started out sceptical of, and what actually stuck.",
    tools: ["Mindfulness practice", "Rogers (2016)"],
    pdf: null,
    privateNote: "The full reflection isn't shared because it's personal.",
    sections: [
      { heading: "Overview", text: "A reflection on the mindfulness training in HLSC 3P25, read alongside The Mindful Twenty-Something (Rogers, 2016). I went in seeing it as something to get through for credit, and came out using some of it every week." },
      { heading: "What worked and what didn't", list: [
        "Belly breathing and focusing on the breath helped in stressful moments like presentations and midterms. It didn't make stress disappear, but it took the edge off.",
        "'Chicken breathing' was oddly effective, mostly because it's funny and lifts my mood.",
        "Walking meditation felt awkward and I gave up partway. Noticing my own judgment about that was a lesson in itself.",
        "The 'observing mind' idea was the hardest to connect with, and I said so."
      ] },
      { heading: "Connecting it to the course", text: "Mindfulness can help people pause before reacting, which matters for anxiety and addiction, but it isn't a substitute for therapy, medication or proper support. I also pointed out that not everyone has the time or circumstances to practise it, and linked it to a guest lecture on social health and community, including how joining Toastmasters fits in." },
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
    summary: "A What? So What? Now What? journal on study habits, research skills, wellness, career paths and presenting.",
    tools: ["Reflective writing", "What? So What? Now What?"],
    pdf: null,
    privateNote: "The full journal isn't shared because it includes personal details.",
    sections: [
      { heading: "Overview", text: "A summative learning journal for a course on learning strategies. Each entry answers a directed question using a What? So What? Now What? structure, connecting the course material to my own habits." },
      { heading: "Topics I reflected on", list: [
        "Note-taking: realising that typing everything on my laptop was mostly passive learning, and switching to rewriting ideas in my own words and spaced repetition.",
        "Research: using sharper keywords in Omni and mining reference lists instead of starting from scratch.",
        "Wellness: mapping my habits onto the eight dimensions of wellness and setting a goal for occupational wellness.",
        "Career paths: planned happenstance and chaos theory, and seeing a change of direction as part of the process.",
        "Presentations: practising alone, with a test audience and on video, and joining Toastmasters."
      ] },
      { heading: "What I took away", text: "The biggest change was self-awareness: understanding how I learn, what wasn't working, and what to do about it." }
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
    summary: "A video forum argument that grievance procedures matter, but strikes, bargaining and organizing do more to democratize work.",
    tools: ["PowerPoint", "Ross & Savage, Building a Better World"],
    pdf: null,
    privateNote: "The slides aren't posted yet. A PDF version is coming soon.",
    sections: [
      { heading: "My position", text: "Disagree: the grievance system is not the most important tool for workplace democracy. It's useful, but it's one small piece." },
      { heading: "The argument", list: [
        "Grievances are reactive. They only respond after an employer has already broken the agreement.",
        "They replaced faster, more powerful tools like walkouts, which put immediate pressure on employers.",
        "They're bureaucratic, moving power from workers to lawyers, arbitrators and HR, which can make members passive.",
        "Strikes, collective bargaining, political action, rank-and-file organizing and equity committees do more to give workers a real voice."
      ] },
      { heading: "What I took away", text: "How to build a clear position from a textbook and lecture material, and present it in a short, structured video format." }
    ]
  },
  {
    id: "work-life-school-balance-interview",
    title: "Balancing work, school and life: a qualitative interview",
    course: "HLSC 3P37",
    courseName: "Qualitative Research in Health Sciences",
    term: "Fall 2025",
    type: "Qualitative research",
    format: "Solo",
    area: "Research",
    summary: "Designed and ran a semi-structured interview with a university student about juggling school, part-time work and personal life.",
    tools: ["Interview guide", "Transcription", "Field notes"],
    pdf: null,
    privateNote: "The transcript isn't shared to protect the participant's privacy.",
    sections: [
      { heading: "Overview", text: "A qualitative research assignment where I built an interview guide with main and follow-up questions, then interviewed a fourth-year student (under a pseudonym) about balancing school, work and personal life." },
      { heading: "How I did it", list: [
        "Explained the purpose, got consent to record, and made clear they could skip questions or stop at any time.",
        "Used open questions and follow-up probes to go from their typical week to a specific stressful time.",
        "Transcribed the interview word for word with notes on pauses and reactions, then organised field notes by theme.",
        "Offered a mental health and wellness resource sheet at the end."
      ] },
      { heading: "Themes that came up", list: [
        "Organisation and scheduling as the main strategy.",
        "Feeling there's no real balance, made worse by planning for what comes after graduation.",
        "Giving up personal time when everything piles up at once.",
        "Physical activity as the most helpful way to cope, while breaks felt like they added stress.",
        "Advice for others: be realistic about how much you take on."
      ] },
      { heading: "What I took away", text: "How much good follow-up questions matter, and how to handle consent and confidentiality in real research." }
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
    summary: "Mapped median household income and 2023 major crime density across Toronto's 158 neighbourhoods in ArcGIS Pro.",
    tools: ["ArcGIS Pro", "Excel", "Census & open data"],
    pdf: "files/toronto-income-crime-gis.pdf",
    sections: [
      { heading: "Research question", text: "How are median household income and major crime density spread across Toronto's 158 neighbourhoods, and do the two patterns line up? Exposure to crime matters for public health because it's linked to stress, anxiety, less physical activity and chronic disease." },
      { heading: "Methods", list: [
        "Joined 2021 Census median after-tax household income to the City of Toronto's neighbourhood boundaries.",
        "Mapped 49,432 major crime incidents from 2023 (Toronto Police Service open data) and counted them per neighbourhood with a spatial join.",
        "Calculated crime density per km² and made two choropleth maps using natural breaks."
      ] },
      { heading: "Findings", list: [
        "Median income varied almost threefold, from $27,200 to $61,600, with the highest-income areas mostly in the north.",
        "Crime density varied far more, from 12 to 1,422 crimes per km², and was concentrated in the downtown core.",
        "The two maps didn't match: the lowest-income neighbourhoods didn't have the highest crime density, which points to factors like population density, commercial activity and transit."
      ] },
      { heading: "Limitations", text: "A cross-sectional, neighbourhood-level design can't show cause and effect (the ecological fallacy). Income and crime data came from different years, and only reported crimes are counted." }
    ]
  },
  {
    id: "gis-postal-codes-greenspace",
    title: "GIS lab: postal codes, distances and greenspace buffers",
    course: "HLSC 3Q90",
    courseName: null,
    term: "Fall 2025",
    type: "GIS assignment",
    format: "Solo",
    area: "Research",
    summary: "Mapped postal code locations across Toronto, measured distances and used buffers to compare access to greenspace.",
    tools: ["ArcGIS Pro", "Buffers", "Forward sortation areas"],
    pdf: "files/gis-postal-codes-greenspace.pdf",
    sections: [
      { heading: "Overview", text: "A hands-on GIS assignment working with point data for Toronto postal codes, and thinking about how the size of a buffer changes what counts as someone's 'neighbourhood'." },
      { heading: "What I did", list: [
        "Mapped 416 postal codes and found that most locations clustered in East York around Danforth Avenue.",
        "Counted 312 locations inside the M4C forward sortation area.",
        "Measured the distance from a postal code to a target location (about 2.97 km).",
        "Drew 500 m and 1 km buffers around each location and compared how much greenspace each captured."
      ] },
      { heading: "My call", text: "For a study on greenspace and physical activity, I'd use the 1 km buffer. The 500 m buffer around one location captured almost no parks, while 1 km included Downsview Park, which is a realistic walk away." }
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
    summary: "An argumentative essay making the research-backed case that gaming in moderation builds mental, social and practical skills.",
    tools: ["Thesis & outline", "APA style", "Literature"],
    pdf: "files/video-games-benefits-essay.pdf",
    sections: [
      { heading: "Thesis", text: "Gaming isn't a harmful distraction when it's done responsibly. In moderation, it improves mental skills, supports emotional wellbeing and builds social connection through teamwork and communication." },
      { heading: "The argument", list: [
        "Cognitive benefits: action and puzzle games train attention, memory, problem-solving and fast decision-making (Bediou et al., 2018).",
        "Social benefits: multiplayer games like Fortnite and Minecraft build teamwork and real friendships and can reduce loneliness (Cole & Griffiths, 2007).",
        "Learning: gamification and tools like Minecraft Education make learning more engaging (Connolly et al., 2012).",
        "Myths: the problem is excessive play, not gaming itself (Granic et al., 2014)."
      ] },
      { heading: "How I built it", text: "I started with a thesis statement and a section-by-section outline with a source for each point, then turned that into the full essay." },
      { heading: "What I took away", text: "Writing about something I actually care about made it easier to practise structuring an argument and backing each claim with evidence." }
    ]
  }
];
