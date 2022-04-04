// export async function getArticles() {
//   try {
//     const response = await fetch('https://api.nhs.uk/mental-health/', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'subscription-key': 'b1c9a774fca448c3a205d1c33d4ef844',
//         'Access-Control-Allow-Origin': '*',
//       },
//     });
//     const res = await response.json();
//     console.log(res);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

export const mockApiResponse = {
  '@context': 'http://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Mental health',
  copyrightHolder: {
    name: 'Crown Copyright',
    '@type': 'Organization',
  },
  license: 'https://developer.api.nhs.uk/terms',
  author: {
    url: 'https://www.nhs.uk',
    logo: 'https://www.nhs.uk/nhscwebservices/documents/logo1.jpg',
    email: 'nhswebsite.servicedesk@nhs.net',
    '@type': 'Organization',
    name: 'NHS website',
  },
  about: {
    '@type': 'WebPage',
    name: 'Mental health',
    alternateName: '',
  },
  description: 'Find information and support for your mental health.',
  url: 'https://www.nhs.uk/mental-health/',
  genre: [],
  hasPart: [
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/psychosis/overview/#symptoms',
      description:
        'The main symptoms of psychosis are hallucinations and delusions.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>The 2 main symptoms of psychosis are:</p><ul><li><a id="26028" linktype="page">hallucinations</a> – where a person hears, sees and, in some cases, feels, smells or tastes things that do not exist outside their mind but can feel very real to the person affected by them; a common hallucination is hearing voices</li><li>delusions – where a person has strong beliefs that are not shared by others; a common delusion is someone believing there\'s a conspiracy to harm them</li></ul><p>The combination of hallucinations and delusional thinking can cause severe distress and a change in behaviour.</p><p>Experiencing the symptoms of psychosis is often referred to as having a psychotic episode.</p>',
        },
      ],
      headline: 'Symptoms of psychosis',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/CausesHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/psychosis/overview/#causes',
      description:
        'Common causes of psychosis include mental health conditions like schizophrenia and bipolar disorder.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>It\'s sometimes possible to identify the cause of psychosis as a specific mental health condition, such as:</p><ul><li><a id="26145" linktype="page">schizophrenia</a> – a condition that causes a range of psychological symptoms, including hallucinations and delusions</li><li><a id="26126" linktype="page">bipolar disorder</a> – a mental health condition that affects mood; a person with bipolar disorder can have episodes of low mood <a id="26175" linktype="page">(depression)</a> and highs or elated mood (mania)</li><li>severe depression – some people with depression also have symptoms of psychosis when they\'re very depressed</li></ul><p>Psychosis can also be triggered by:</p><ul><li>a traumatic experience</li><li>stress</li><li><a id="23412" linktype="page">drug misuse</a></li><li><a id="23199" linktype="page">alcohol misuse</a></li><li>side effects of prescribed medicine</li><li>a physical condition, such as a <a id="20967" linktype="page">brain tumour</a></li></ul><p>How often a psychotic episode occurs and how long it lasts can depend on the underlying cause.</p>',
        },
      ],
      headline: 'Causes of psychosis',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/psychosis/overview/#medical-treatments',
      description:
        'Common treatments for psychosis include antipsychotic medicines, talking therapies and social support.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Treatment for psychosis involves using a combination of:</p><ul><li>antipsychotic medicine – which can help relieve the symptoms of psychosis</li><li>psychological therapies – the 1-to-1 talking therapy <a id="26106" linktype="page">cognitive behavioural therapy (CBT)</a> has proved successful in helping people with psychosis, and family interventions (a form of therapy that may involve partners, family members and close friends) have been shown to reduce the need for hospital treatment in people with psychosis</li><li>social support – support with social needs, such as education, employment or accommodation</li></ul><p>Some people are recommended to take antipsychotics on a long-term basis (and possibly for the rest of their lives). Other people may be able to gradually reduce their dosage and then stop taking them altogether if there is a marked improvement in symptoms.</p><p>Do not stop suddenly taking any prescribed medicines as this could trigger a relapse of your symptoms.</p><p>If a person\'s psychotic episodes are severe, they may need to be admitted to a psychiatric hospital for treatment.</p>',
        },
      ],
      headline: 'Treating psychosis',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Psychosis is where you see or hear things that are not there (hallucinations) or believe things that are not true (delusions).',
      hasPart: [
        {
          text: '<p>The main symptoms of psychosis are hallucinations and delusions.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Common treatments for psychosis include antipsychotic medicines, talking therapies and social support.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Common causes of psychosis include mental health conditions like schizophrenia and bipolar disorder.</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/psychosis/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/anorexia/overview/#symptoms',
      description:
        "Symptoms of anorexia include believing you're fat when you're a healthy weight or underweight, eating very little or missing meals.",
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Signs and symptoms of anorexia include:</p><ul><li>if you\'re under 18, your weight and height being lower than expected for your age</li><li>if you\'re an adult, having an unusually low <a id="26478" linktype="page">body mass index (BMI)</a></li><li>missing meals, eating very little or avoiding eating any foods you see as fattening</li><li>believing you\'re fat when you\'re a healthy weight or underweight</li><li>taking medicine to reduce your hunger (appetite suppressants)</li><li>your periods stopping (in women who have not reached menopause) or not starting (in younger women and girls)</li><li>physical problems, such as feeling <a id="19185" linktype="page">lightheaded or dizzy</a>, <a id="20533" linktype="page">hair loss</a> or dry skin</li></ul><p>Some people with anorexia may also make themselves sick, do an extreme amount of exercise, or use <a id="20860" linktype="page">medicine to help them poo (laxatives)</a> or to make them pee (diuretics) to try to stop themselves gaining weight from any food they do eat.</p>',
        },
      ],
      headline: 'Signs and symptoms of anorexia',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/anorexia/overview/#medical-treatments',
      description:
        'Anorexia is usually treated with talking therapies, such as cognitive behavioural therapy (CBT).',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>You can recover from anorexia, but it may take time and recovery will be different for everyone.</p><p>Your treatment plan will be tailored to you and should consider any other support you might need, such as for depression or anxiety.</p><p>If you\'re over 18, you should be offered a type of talking therapy to help you manage your feelings about food and eating so that you are able to eat enough to be healthy. Talking therapies that are commonly used to treat anorexia in adults include:</p><ul><li><a id="26106" linktype="page">cognitive behavioural therapy (CBT)</a></li><li>Maudsley Anorexia Nervosa Treatment for Adults (MANTRA)</li><li>specialist supportive clinical management (SSCM)</li></ul><p>If you\'re under 18, you should be offered family therapy. You may also be offered another type of talking therapy, such as CBT or adolescent-focused psychotherapy.</p>',
        },
      ],
      headline: 'Treatment for anorexia',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Anorexia is an eating disorder where you feel a need to keep your weight as low as possible.',
      hasPart: [
        {
          text: "<p>Symptoms of anorexia include believing you're fat when you're a healthy weight or underweight, eating very little or missing meals.</p> ",
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Anorexia is usually treated with talking therapies, such as cognitive behavioural therapy (CBT).</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/anorexia/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/overview/#symptoms',
      description:
        'Symptoms of generalised anxiety disorder vary from person to person, but include constant worrying, a sense of dread and difficulty concentrating.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>GAD can cause both psychological (mental) and physical symptoms.</p><p>These vary from person to person, but can include:</p><ul><li>feeling restless or worried</li><li>having trouble concentrating or sleeping</li><li><a id="19185" linktype="page">dizziness</a> or <a id="19253" linktype="page">heart palpitations</a></li></ul>',
        },
      ],
      headline: 'Symptoms of generalised anxiety disorder (GAD)',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/overview/#medical-treatments',
      description:
        'Things like exercising more and drinking less alcohol can help with generalised anxiety disorder. Treatments include talking therapies and medicines.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>GAD can have a significant effect on your daily life, but several different treatments are available that can ease your symptoms.</p><p>These include:</p><ul><li>psychological therapies – you can get psychological therapies like <a id="26106" linktype="page">cognitive behavioural therapy (CBT)</a> on the NHS; you do not need a referral from a GP and you can <a href="https://www.nhs.uk/service-search/find-a-psychological-therapies-service/">refer yourself for psychological therapies service in your area</a></li><li>medicine – such as a type of antidepressant called <a id="26176" linktype="page">selective serotonin reuptake inhibitors (SSRIs)</a></li></ul><p>With treatment, many people are able to control their anxiety levels. But some treatments may need to be continued for a long time and there may be periods when your symptoms worsen.</p>',
        },
      ],
      headline: 'How generalised anxiety disorder (GAD) is treated',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SelfCareHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/overview/#self-care',
      description:
        'Things like exercising more and drinking less alcohol can help with generalised anxiety disorder. Treatments include talking therapies and medicines.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>There are also many things you can do yourself to help reduce your anxiety, such as: </p><ul><li>going on a self-help course</li><li>exercising regularly</li><li><a id="23535" linktype="page">stopping smoking</a></li><li>cutting down on the amount of alcohol and caffeine you drink</li></ul>',
        },
      ],
      headline: 'Self-help for generalised anxiety disorder (GAD)',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Generalised anxiety disorder is where you feel anxious most of the time.',
      hasPart: [
        {
          text: '<p>Symptoms of generalised anxiety disorder vary from person to person, but include constant worrying, a sense of dread and difficulty concentrating.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Things like exercising more and drinking less alcohol can help with generalised anxiety disorder. Treatments include talking therapies and medicines.</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/bipolar-disorder/overview/#symptoms',
      description:
        'The main symptoms of bipolar disorder are episodes of extreme highs and lows, which can last for several weeks.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>People with bipolar disorder have episodes of:</p><ul><li>depression – feeling very low and lethargic</li><li>mania – feeling very high and overactive</li></ul><p><a id="26127" linktype="page">Symptoms of bipolar disorder</a> depend on which mood you\'re experiencing.</p><p>Unlike simple mood swings, each extreme episode of bipolar disorder can last for several weeks (or even longer).</p>',
        },
      ],
      headline: 'Symptoms of bipolar disorder',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/bipolar-disorder/overview/#medical-treatments',
      description:
        'Treatments for bipolar disorder include medicines and talking therapies.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>The high and low phases of bipolar disorder are often so extreme that they interfere with everyday life.</p><p>But there are several options for <a id="26130" linktype="page">treating bipolar disorder</a> that can make a difference.</p><p>They aim to control the effects of an episode and help someone with bipolar disorder live life as normally as possible.</p><p>The following treatment options are available:</p><ul><li>medicine to prevent episodes of mania and depression – these are known as mood stabilisers, and you take them every day on a long-term basis</li><li>medicine to treat the main symptoms of depression and mania when they happen</li><li>learning to recognise the triggers and signs of an episode of depression or mania</li><li>psychological treatment – such as talking therapy, which can help you deal with depression, and provides advice about how to improve your relationships</li><li>lifestyle advice – such as doing <a id="23336" linktype="page">regular exercise</a>, planning activities you enjoy that give you a sense of achievement, as well as advice on <a id="23210" linktype="page">improving your diet</a> and <a id="23601" linktype="page">getting more sleep</a></li></ul><p>It\'s thought using a combination of different treatment methods is the best way to control bipolar disorder.</p><p>Help and advice for people with a long-term condition or their carers is also available from charities, support groups and associations.</p><p>This includes self-help and learning to deal with the practical aspects of a long-term condition.</p>',
        },
      ],
      headline: 'Treatments for bipolar disorder',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Bipolar disorder is a mental health condition that causes extreme mood swings.',
      hasPart: [
        {
          text: '<p>The main symptoms of bipolar disorder are episodes of extreme highs and lows, which can last for several weeks.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Treatments for bipolar disorder include medicines and talking therapies.</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/bipolar-disorder/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/schizophrenia/overview/#symptoms',
      description:
        'Symptoms of schizophrenia include hearing voices or seeing things that are not real, unusual beliefs and confused thinking.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Symptoms of schizophrenia include: </p><ul><li><a id="26028" linktype="page">hallucinations</a> – hearing or seeing things that do not exist outside of the mind</li><li>delusions – unusual beliefs not based on reality</li><li>muddled thoughts based on hallucinations or delusions</li><li>losing interest in everyday activities</li><li>not caring about your personal hygiene</li><li>wanting to avoid people, including friends</li></ul><p>Schizophrenia does not cause someone to be violent and people with schizophrenia do not have a split personality.</p>',
        },
      ],
      headline: '',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/schizophrenia/overview/#medical-treatments',
      description:
        'Schizophrenia is usually treated with a combination of talking therapies and medicine.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Schizophrenia is usually treated with a combination of medicine and therapy tailored to each individual.</p><p>In most cases, this will be antipsychotic medicines and <a id="26082" linktype="page">cognitive behavioural therapy (CBT)</a>.</p><p>People with schizophrenia usually receive help from a community mental health team, which offers day-to-day support and treatment.</p><p>Many people recover from schizophrenia, although they may have periods when symptoms return (relapses).</p><p>Support and treatment can help reduce the impact the condition has on daily life.</p>',
        },
      ],
      headline: 'Treating schizophrenia',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Schizophrenia is a mental health condition where you may see, hear or believe things that are not real.',
      hasPart: [
        {
          text: '<p>Symptoms of schizophrenia include hearing voices or seeing things that are not real, unusual beliefs and confused thinking.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Schizophrenia is usually treated with a combination of talking therapies and medicine.</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/schizophrenia/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/overview/#symptoms',
      description:
        'Symptoms of borderline personality include being emotionally unstable, having upsetting thoughts and acting without thinking.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>The symptoms of BPD can be grouped into 4 main areas:</p><ul><li>emotional instability – the psychological term for this is affective dysregulation</li><li>disturbed patterns of thinking or perception – cognitive distortions or perceptual distortions</li><li>impulsive behaviour</li><li>intense but unstable relationships with others</li></ul><p>The symptoms of a personality disorder may range from mild to severe and usually emerge in adolescence, persisting into adulthood.</p>',
        },
      ],
      headline: 'Symptoms of borderline personality disorder (BPD)',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/CausesHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/overview/#causes',
      description:
        "The cause of borderline personality disorder is unclear. It's been linked to traumatic events during childhood, such as neglect or abuse.",
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>The causes of BPD are unclear. But as with most conditions, BPD appears to result from a combination of genetic and environmental factors.</p><p>People with BPD come from many different backgrounds, but most will have experienced some kind of trauma or neglect as children.</p>',
        },
      ],
      headline: 'Causes of borderline personality disorder (BPD)',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/overview/#medical-treatments',
      description:
        'The main treatment for borderline personality disorder is a type of talking therapy called psychotherapy.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Many people with BPD can benefit from psychological or medical treatment.</p><p>Treatment may involve a range of individual and group psychological therapies <a id="21411" linktype="page">(psychotherapy)</a> carried out by trained professionals working with a community mental health team.</p><p>Effective treatment may last more than a year.</p><p>Over time, many people with BPD overcome their symptoms and recover. Additional treatment is recommended for people whose symptoms return.</p>',
        },
      ],
      headline: 'Treating borderline personality disorder (BPD)',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Borderline personality disorder is a condition that affects how you think, feel and interact with other people.',
      hasPart: [
        {
          text: '<p>Symptoms of borderline personality include being emotionally unstable, having upsetting thoughts and acting without thinking.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>The main treatment for borderline personality disorder is a type of talking therapy called psychotherapy.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: "<p>The cause of borderline personality disorder is unclear. It's been linked to traumatic events during childhood, such as neglect or abuse.</p> ",
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/clinical-depression/overview/#symptoms',
      description:
        'Symptoms of depression include feeling unhappy or hopeless, low self-esteem and finding no pleasure in things you usually enjoy.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Depression affects people in different ways and can cause a wide variety of symptoms.</p><p>They range from lasting feelings of unhappiness and hopelessness, to losing interest in the things you used to enjoy and feeling very tearful. Many people with depression also have <a id="26099" linktype="page">symptoms of anxiety</a>.</p><p>There can be physical symptoms too, such as feeling constantly tired, sleeping badly, having no appetite or sex drive, and various aches and pains.</p><p>The <a id="26180" linktype="page">symptoms of depression</a> range from mild to severe. At its mildest, you may simply feel persistently low in spirit, while severe depression can make you feel suicidal, that life is no longer worth living.</p><p>Most people experience feelings of <a id="25981" linktype="page">stress, anxiety or low mood</a> during difficult times. A low mood may improve after a short period of time, rather than being a sign of depression.</p>',
        },
      ],
      headline: 'How to tell if you have depression',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/CausesHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/clinical-depression/overview/#causes',
      description:
        'Many things can cause depression such as stressful events, personality, family history and giving birth.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Sometimes there\'s a trigger for depression. Life-changing events, such as bereavement, losing your job or giving birth, can bring it on.</p><p>People with a family history of depression are more likely to experience it themselves. But you can also become depressed for no obvious reason.</p><p><a id="26181" linktype="page">Read more about the causes of depression</a></p>',
        },
      ],
      headline: 'What causes depression?',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/clinical-depression/overview/#medical-treatments',
      description:
        'Treatment for depression usually involves a combination of lifestyle changes, talking therapies and medicines.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Treatment for depression can involve a combination of lifestyle changes, talking therapies and medicine. Your recommended treatment will be based on whether you have mild, moderate or severe depression.</p><p>If you have mild depression, your doctor may suggest waiting to see whether it improves on its own, while monitoring your progress. This is known as "watchful waiting". They may also suggest lifestyle measures such as <a id="26003" linktype="page">exercise</a> and self-help groups.</p><p>Talking therapies, such as <a id="26106" linktype="page">cognitive behavioural therapy (CBT)</a>, are often used for mild depression that is not improving, or moderate depression. <a id="26068" linktype="page">Antidepressants</a> are also sometimes prescribed.</p><p>For moderate to severe depression, a combination of talking therapy and antidepressants is often recommended. If you have severe depression, you may be referred to a specialist mental health team for intensive specialist talking treatments and prescribed medicine.</p>',
        },
      ],
      headline: 'Treating depression',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SelfCareHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/clinical-depression/overview/#self-care',
      description:
        'Treatment for depression usually involves a combination of lifestyle changes, talking therapies and medicines.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Many people with depression benefit by making lifestyle changes, such as getting more <a id="23306" linktype="page">exercise</a>, cutting down on <a id="23199" linktype="page">alcohol</a>, <a id="23537" linktype="page">giving up smoking</a> and <a id="23210" linktype="page">eating healthily</a>.</p><p>Reading a self-help book or joining a support group are also worthwhile. They can help you gain a better understanding about what causes you to feel depressed. Sharing your experiences with others in a similar situation can also be very supportive.</p>',
        },
      ],
      headline: 'Living with depression',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Depression is a low mood that lasts for weeks or months and affects your daily life.',
      hasPart: [
        {
          text: '<p>Symptoms of depression include feeling unhappy or hopeless, low self-esteem and finding no pleasure in things you usually enjoy.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Treatment for depression usually involves a combination of lifestyle changes, talking therapies and medicines.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Many things can cause depression such as stressful events, personality, family history and giving birth.</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/clinical-depression/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/phobias/overview/#symptoms',
      description:
        'Common symptoms of a phobia are anxiety and panic when you come into contact with the cause of your phobia.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>A phobia is a type of <a id="26098" linktype="page">anxiety disorder</a>. You may not experience any symptoms until you come into contact with the source of your phobia.</p><p>But in some cases, even thinking about the source of a phobia can make a person feel anxious or panicky. This is known as anticipatory anxiety.</p><p>Symptoms may include:</p><ul><li>unsteadiness, dizziness and lightheadedness</li><li>nausea</li><li>sweating</li><li>increased heart rate or <a id="19253" linktype="page">palpitations</a></li><li>shortness of breath</li><li>trembling or shaking</li><li>an upset stomach</li></ul><p>If you do not come into contact with the source of your phobia very often, it may not affect your everyday life.</p><p>But if you have a complex phobia, such as <a id="26165" linktype="page">agoraphobia</a>, leading a normal life may be very difficult.</p>',
        },
      ],
      headline: 'Phobia symptoms',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/phobias/overview/#medical-treatments',
      description:
        'Treatments for phobias include talking therapies, such as cognitive behavioural therapy, and sometimes medicines.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Almost all phobias can be successfully treated and cured.</p><p>Simple phobias can be treated through gradual exposure to the object, animal, place or situation that causes fear and anxiety. This is known as desensitisation or self-exposure therapy.</p><p>You could try these methods with the help of a professional or as part of a <a id="26189" linktype="page">self-help programme</a>.</p><p>Treating complex phobias often takes longer and involves talking therapies, such as:</p><ul><li><a id="26062" linktype="page">counselling</a></li><li><a id="21411" linktype="page">psychotherapy</a></li><li><a id="26106" linktype="page">cognitive behavioural therapy</a></li></ul><p>Medication is not usually used to treat phobias. But it\'s sometimes prescribed to help people cope with the effects of anxiety.</p><p>Medicines that may be used include:</p><ul><li><a id="26068" linktype="page">antidepressants</a></li><li>tranquillisers</li><li><a id="19097" linktype="page">beta blockers</a></li></ul>',
        },
      ],
      headline: 'Treating phobias',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description: 'A phobia is an extreme fear of something or a situation.',
      hasPart: [
        {
          text: '<p>Common symptoms of a phobia are anxiety and panic when you come into contact with the cause of your phobia.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Treatments for phobias include talking therapies, such as cognitive behavioural therapy, and sometimes medicines.</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/phobias/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/#symptoms',
      description:
        'Symptoms of postnatal depression include constant sadness, lack of energy and difficulty bonding with your baby.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Many women feel a bit down, tearful or anxious in the first week after giving birth.</p><p>This is often called the "<a id="22428" linktype="page">baby blues</a>" and is so common that it\'s considered normal.</p><p>The "baby blues" do not last for more than 2 weeks after giving birth.</p><p>If your symptoms last longer or start later, you could have postnatal depression.</p><p>Postnatal depression can start any time in the first year after giving birth.</p><p>Signs that you or someone you know might be depressed include:</p><ul><li>a persistent feeling of sadness and low mood</li><li>lack of enjoyment and loss of interest in the wider world</li><li>lack of energy and feeling tired all the time</li><li>trouble sleeping at night and feeling sleepy during the day</li><li>difficulty bonding with your baby</li><li>withdrawing from contact with other people</li><li>problems concentrating and making decisions</li><li>frightening thoughts – for example, about hurting your baby</li></ul><p>Many women do not realise they have postnatal depression, because it can develop gradually.</p>',
        },
      ],
      headline: 'Symptoms of postnatal depression',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/#medical-treatments',
      description:
        'Things you can do, such as resting and relaxing whenever you can, may help with postnatal depression. Some people need talking therapy or medicines.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Postnatal depression can be lonely, distressing and frightening, but support and effective treatments are available.</p><p>These include:</p><ul><li>self-help – things you can try yourself include talking to your family and friends about your feelings and what they can do to help, making time for yourself to do things you enjoy, resting whenever you get the chance, getting as much sleep as you can at night, <a href="https://www.nhs.uk/live-well/exercise/free-fitness-ideas/">exercising regularly</a>, and eating a <a href="https://www.nhs.uk/live-well/eat-well/">healthy diet</a></li><li>psychological therapy – a GP may be able to recommend a self-help course or may refer you for a course of therapy, such as <a href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/cognitive-behavioural-therapy-cbt/overview/">cognitive behavioural therapy (CBT)</a></li><li><a href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/medicines-and-psychiatry/antidepressants/overview/">antidepressants</a> – these may be recommended if your depression is more severe or other treatments have not helped; your doctor can prescribe a medicine that\'s safe to take while breastfeeding</li></ul>',
        },
      ],
      headline: 'Treatments for postnatal depression',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Postnatal depression is a type of depression that parents can have after having a baby.',
      hasPart: [
        {
          text: '<p>Symptoms of postnatal depression include constant sadness, lack of energy and difficulty bonding with your baby.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Things you can do, such as resting and relaxing whenever you can, may help with postnatal depression. Some people need talking therapy or medicines.</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SelfCareHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/treatment/#self-care',
      description:
        'Things you can do, such as resting and relaxing whenever you can, may help with postnatal depression. Some people need talking therapy or medicines.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Looking after a baby can be stressful and challenging for anyone, and it can be even tougher if you\'re dealing with postnatal depression as well.</p><p>There are a number of things you can try yourself to improve your symptoms and help you cope.</p><p>These include:</p><ul><li>talking to your partner, friends and family – try to help them understand how you\'re feeling and what they can do to support you</li><li>not trying to be a "supermum" – accept help from others when it\'s offered and ask your loved ones if they can help look after the baby and do tasks such as housework, cooking and shopping</li><li>making time for yourself – try to do activities that you find relaxing and enjoyable, such as going for a walk, listening to music, reading a book or having a warm bath</li><li>resting when you can – although it can be difficult when you\'re looking after a baby, try to sleep whenever you get the chance, follow <a href="https://www.nhs.uk/conditions/insomnia/self-help/">good sleeping habits</a> and ask your partner to help with the night-time work</li><li><a href="https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/exercise-for-depression/">exercising regularly to boost your mood</a></li><li>eating regular, <a href="https://www.nhs.uk/live-well/eat-well/">healthy meals</a> and not going for long periods without eating</li><li>not drinking <a href="https://www.nhs.uk/live-well/alcohol-support/">alcohol</a> or taking drugs, as this can make you feel worse</li></ul><p>Ask your health visitor about support services in your area. They may be able to put you in touch with a social worker, counsellor or local support group.</p><p>It can be reassuring to meet other women who are going through something similar.</p>',
        },
      ],
      headline: 'Self-help for postnatal depression',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/overview/#symptoms',
      description:
        'The main symptoms of obsessive compulsive disorder are unpleasant thoughts and repetitive behaviours that you cannot control.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: "<p>If you have OCD, you'll usually experience frequent obsessive thoughts and compulsive behaviours.</p><ul><li>An obsession is an unwanted and unpleasant thought, image or urge that repeatedly enters your mind, causing feelings of anxiety, disgust or unease.</li><li>A compulsion is a repetitive behaviour or mental act that you feel you need to do to temporarily relieve the unpleasant feelings brought on by the obsessive thought.</li></ul><p>For example, someone with an obsessive fear of being burgled may feel they need to check all the windows and doors are locked several times before they can leave their house.</p><p>Women can sometimes have OCD during pregnancy or after their baby is born. Obsessions may include worrying about harming the baby or not sterilising feeding bottles properly. Compulsions could be things such as repeatedly checking the baby is breathing.</p>",
        },
      ],
      headline: 'Symptoms of obsessive compulsive disorder (OCD)',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/overview/#medical-treatments',
      description:
        'Obsessive compulsive disorder is usually treated with talking therapies. Medicines may help if your symptoms are severe.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>There are some effective treatments for OCD that can help reduce the impact it has on your life.</p><p>The main treatments are:</p><ul><li>psychological therapy – usually <a id="26106" linktype="page">cognitive behavioural therapy (CBT)</a>, which helps you face your fears and obsessive thoughts without "putting them right" through compulsions</li><li>medicine – usually a type of antidepressant medicine called <a id="26176" linktype="page">selective serotonin reuptake inhibitors (SSRIs)</a>, which can help by altering the balance of chemicals in your brain</li></ul><p>CBT will usually have an effect quite quickly. It can take several months before you notice the effects of treatment with SSRIs, but most people will eventually benefit.</p><p>If these treatments do not help, you may be offered an alternative SSRI or be given a combination of an SSRI and CBT.</p><p>Some people may be referred to a specialist mental health service for further treatment.</p>',
        },
      ],
      headline: 'Treatments for obsessive compulsive disorder (OCD)',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Obsessive compulsive disorder is a mental health condition where you have recurring thoughts and repetitive behaviours that you cannot control.',
      hasPart: [
        {
          text: '<p>The main symptoms of obsessive compulsive disorder are unpleasant thoughts and repetitive behaviours that you cannot control.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Obsessive compulsive disorder is usually treated with talking therapies. Medicines may help if your symptoms are severe.</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/overview/#symptoms',
      description:
        'Symptoms of post-traumatic stress disorder include flashbacks, nightmares, feeling very anxious and difficulty sleeping.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>Someone with PTSD often relives the traumatic event through nightmares and flashbacks, and may experience feelings of isolation, irritability and guilt.</p><p>They may also have problems sleeping, such as <a id="20728" linktype="page">insomnia</a>, and find concentrating difficult.</p><p>These symptoms are often severe and persistent enough to have a significant impact on the person\'s day-to-day life.</p>',
        },
      ],
      headline: 'Symptoms of post-traumatic stress disorder (PTSD)',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/CausesHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/overview/#causes',
      description:
        'Any situation that a person finds traumatic can cause post-traumatic stress disorder. Examples include a road accident, an assault and childbirth.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: "<p>Any situation that a person finds traumatic can cause PTSD.</p><p>These can include:</p><ul><li>serious road accidents</li><li>violent personal assaults, such as sexual assault, mugging or robbery</li><li>serious health problems</li><li>childbirth experiences</li></ul><p>PTSD can develop immediately after someone experiences a disturbing event, or it can occur weeks, months or even years later.</p><p>PTSD is estimated to affect about 1 in every 3 people who have a traumatic experience, but it's not clear exactly why some people develop the condition and others do not.</p>",
        },
      ],
      headline: 'Causes of post-traumatic stress disorder (PTSD)',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/overview/#medical-treatments',
      description:
        'The main treatments for post-traumatic stress disorder are antidepressants and talking therapies.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>PTSD can be successfully treated, even when it develops many years after a traumatic event.</p><p>Any treatment depends on the severity of symptoms and how soon they occur after the traumatic event. </p><p>Any of the following treatment options may be recommended:</p><ul><li>watchful waiting – monitoring your symptoms to see whether they improve or get worse without treatment</li><li><a id="26068" linktype="page">antidepressants</a> – such as paroxetine or mirtazapine</li><li><a id="26061" linktype="page">psychological therapies</a> – such as trauma-focused cognitive behavioural therapy (CBT) or eye movement desensitisation and reprocessing (EMDR)</li></ul><p>You can refer yourself directly to a psychological therapies service.</p>',
        },
      ],
      headline: 'How post-traumatic stress disorder (PTSD) is treated',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Post-traumatic stress disorder is a mental health condition caused by a traumatic experience.',
      hasPart: [
        {
          text: '<p>Symptoms of post-traumatic stress disorder include flashbacks, nightmares, feeling very anxious and difficulty sleeping.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>The main treatments for post-traumatic stress disorder are antidepressants and talking therapies.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Any situation that a person finds traumatic can cause post-traumatic stress disorder. Examples include a road accident, an assault and childbirth.</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/overview/#overview',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/SymptomsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/#symptoms',
      description:
        'Symptoms of an eating disorder include worrying about your weight, eating too little or making yourself sick after eating.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: '<p>If you or people around you are worried that you have an unhealthy relationship with food, you could have an eating disorder.</p><p>Symptoms of eating disorders include:</p><ul><li>spending a lot of time worrying about your weight and body shape</li><li>avoiding socialising when you think food will be involved</li><li>eating very little food</li><li>making yourself sick or taking laxatives after you eat</li><li>exercising too much</li><li>having very strict habits or routines around food</li><li>changes in your mood such as being withdrawn, anxious or depressed</li></ul><p>You may also notice physical signs, including:</p><ul><li>feeling cold, tired or dizzy</li><li>pains, tingling or numbness in your arms and legs (poor circulation)</li><li>feeling your heart racing, fainting or feeling faint</li><li>problems with your digestion, such as bloating, constipation or diarrhoea</li><li>your weight being very high or very low for someone of your age and height</li><li>not getting your period or other delayed signs of puberty</li></ul>',
        },
      ],
      headline: 'Check if you have an eating disorder',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/TreatmentsHealthAspect',
      url: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/#medical-treatments',
      description:
        'Treatment for an eating disorder depends on the type of condition you have. It usually involves talking therapy.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: "<p>You can recover from an eating disorder, but it may take time and recovery will be different for everyone.</p><p>If you're referred to an eating disorder specialist or team of specialists, they'll be responsible for your care.</p><p>They should talk to you about the support you might need, such as for other conditions you have, and include this in your treatment plan.</p><p>Your treatment will depend on the type of eating disorder you have, but usually includes a talking therapy.</p><p>You may also need regular health checks if your eating disorder is having an impact on your physical health.</p><p>Your treatment may also involve working through a guided self-help programme if you have bulimia or binge eating disorder.</p><p>Most people will be offered individual therapy, but those with binge eating disorder may be offered group therapy.</p>",
        },
      ],
      headline: 'Treatment for eating disorders',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/CausesHealthAspect',
      url: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/#causes',
      description:
        'Anyone can get an eating disorder but things that make it more likely include family problems, depression or dealing with difficult things like death.',
      hasPart: [
        {
          '@type': 'WebPageElement',
          headline: '',
          text: "<p>We do not know exactly what causes eating disorders.</p><p>You may be more likely to get an eating disorder if:</p><ul><li>you or a member of your family has a history of eating disorders, depression, or alcohol or drug misuse</li><li>you've been criticised for your eating habits, body shape or weight</li><li>you're really worried about being slim, particularly if you also feel pressure from society or your job, for example, ballet dancers, models or athletes</li><li>you have anxiety, low self-esteem, an obsessive personality or are a perfectionist</li><li>you've been sexually abused</li></ul>",
        },
      ],
      headline: 'What causes eating disorders?',
    },
    {
      '@type': 'HealthTopicContent',
      hasHealthAspect: 'http://schema.org/OverviewHealthAspect',
      description:
        'Eating disorders are a group of related conditions including anorexia, bulimia and binge eating.',
      hasPart: [
        {
          text: '<p>Symptoms of an eating disorder include worrying about your weight, eating too little or making yourself sick after eating.</p> ',
          '@type': 'WebPageElement',
        },
        {
          text: '<p>Treatment for an eating disorder depends on the type of condition you have. It usually involves talking therapy.</p> ',
          '@type': 'WebPageElement',
        },
      ],
      headline: '',
      url: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/#overview',
    },
  ],
  breadcrumb: {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 0,
        item: {
          '@id': 'https://www.nhs.uk/mental-health/',
          name: 'Mental health',
          genre: [],
        },
      },
    ],
  },
  headline: 'Mental health',
  dateModified: '2022-01-11T14:56:57+00:00',
  contentSubTypes: [],
  mainEntityOfPage: [
    {
      identifier: '23',
      '@type': 'WebPageElement',
      name: 'toptasks',
      headline: '',
      text: '',
      mainEntityOfPage: [
        {
          '@type': 'WebPageElement',
          headline: 'Get urgent help now for mental health',
          url: '/nhs-services/mental-health-services/get-urgent-help-for-mental-health/',
          identifier: '26',
          text: '',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Access an NHS psychological therapies service (IAPT)',
          url: 'https://www.nhs.uk/service-search/find-a-psychological-therapies-service/',
          identifier: '26',
          text: '',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Depression and anxiety self-assessment quiz',
          url: '/mental-health/self-help/guides-tools-and-activities/depression-anxiety-self-assessment-quiz/',
          identifier: '26',
          text: '',
          name: 'link',
        },
      ],
    },
    {
      identifier: '24',
      '@type': 'WebPageElement',
      name: 'canonicallinks',
      headline: '',
      text: '',
      mainEntityOfPage: [
        {
          '@type': 'WebPageElement',
          headline: 'Feelings, symptoms and behaviours',
          url: '/mental-health/feelings-symptoms-behaviours/',
          identifier: '26',
          text: '<p data-block-key="5c9ze">Read about common feelings and symptoms such as stress, anxiety or a low mood</p>',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Mental health conditions',
          url: '/mental-health/conditions/',
          identifier: '26',
          text: '<p data-block-key="1h51c">Read about specific mental health conditions, such as clinical depression, bipolar disorder or OCD</p>',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Advice for life situations and events',
          url: '/mental-health/advice-for-life-situations-and-events/',
          identifier: '26',
          text: '<p data-block-key="1ff5d">Advice for you and people you support about mental health in life situations and events, such as pregnancy and bullying at work</p>',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Self-help',
          url: '/mental-health/self-help/',
          identifier: '26',
          text: '<p data-block-key="od2ms">Read about different types of self-help, such as 5 steps to mental wellbeing and breathing exercises</p>',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Mental health services',
          url: '/nhs-services/mental-health-services/',
          identifier: '26',
          text: '<p data-block-key="3be6u">Find out how to access NHS mental health services and where to get urgent help</p>',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Mental health for children, teenagers and young adults',
          url: '/mental-health/children-and-young-adults/',
          identifier: '26',
          text: '<p data-block-key="xo0kg">Read advice and support about mental health for children, teenagers, students and parents</p>',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Talking therapies, medicine and psychiatry',
          url: '/mental-health/talking-therapies-medicine-treatments/',
          identifier: '26',
          text: '<p data-block-key="tg2ks">Read about the different types of talking therapy and other treatments, such as medicine for mental health problems</p>',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Social care, mental health and your rights',
          url: '/mental-health/social-care-and-your-rights/',
          identifier: '26',
          text: '<p data-block-key="pe8sh">Find information and support about being a carer, receiving social care, accessing mental health services and your mental health rights</p>',
          name: 'link',
        },
      ],
    },
    {
      identifier: '27',
      '@type': 'WebPageElement',
      name: 'RelatedLinks',
      headline: 'Related information',
      text: '',
      mainEntityOfPage: [
        {
          '@type': 'WebPageElement',
          headline: 'Every Mind Matters',
          url: 'https://www.nhs.uk/oneyou/every-mind-matters/',
          identifier: '26',
          text: '',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Autism',
          url: '/conditions/autism/',
          identifier: '26',
          text: '',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Insomnia',
          url: '/conditions/insomnia/',
          identifier: '26',
          text: '',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Dementia guide',
          url: '/conditions/dementia/',
          identifier: '26',
          text: '',
          name: 'link',
        },
        {
          '@type': 'WebPageElement',
          headline: 'Addiction',
          url: '/live-well-old/healthy-body/addiction-what-is-it/',
          identifier: '26',
          text: '',
          name: 'link',
        },
      ],
    },
  ],
};
