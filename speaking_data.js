const speakingData = [
    {
        id: 1,
        question: "May I know your full name? / What is your name?",
        b75: "My full name is Ahmad Salahin Nayeem, but you can just call me Nayeem. Most of my friends and teachers call me by this name.",
        b85: "My full name is Ahmad Salahin Nayeem, though everyone usually calls me Nayeem. It's a short and common name among my friends.",
        b9: "My full name is Ahmad Salahin Nayeem, but please feel free to call me Nayeem. It's the name I've used all my life.",
        meaning: "full name = পুরো নাম | call = ডাকা | usually = সাধারণত"
    },
    {
        id: 2,
        question: "What can I call you? / How may I call you?",
        b75: "You can call me Nayeem, which is a part of my actual name and what people usually call me.",
        b85: "Please feel free to call me Nayeem. It’s much simpler and what everyone calls me.",
        b9: "You can just call me Nayeem, as it's the preferred name used by my family and friends.",
        meaning: "simple = সহজ | preferred = পছন্দের | actual = আসল"
    },
    {
        id: 3,
        question: "How may I address you?",
        b75: "You can address me as Nayeem. That is what most people call me.",
        b85: "You are welcome to address me as Nayeem, which is my familiar name.",
        b9: "You can address me simply as Nayeem, if that's alright with you.",
        meaning: "address = সম্বোধন করা | familiar = পরিচিত"
    },
    {
        id: 4,
        question: "May I see your ID?",
        b75: "Certainly, here is my passport and student ID card for your verification.",
        b85: "Of course, here is my official identification card right here.",
        b9: "Sure, here is my passport, which serves as my primary identification.",
        meaning: "identification = পরিচয়পত্র | verification = যাচাইকরণ | primary = প্রাথমিক"
    },
    {
        id: 5,
        question: "Where do you come from? / Where are you from?",
        b75: "I come from Maijdee Court in Noakhali, in the Chattogram division. I was born and grew up there, so I’m connected to the place. It’s quite a quiet area, with a pleasant natural environment, which I really like. I live in Dhaka for my studies now, but Noakhali is still my hometown and I always enjoy going back whenever I can.",
        b85: "I'm originally from Maijdee Court in Noakhali, which is part of the Chattogram division. I was born and raised there, so I’m quite emotionally attached to the place. It’s quite a quiet area, surrounded by a pleasant natural environment, which I really appreciate. Although I currently live in Dhaka for my studies, I still consider Noakhali my hometown and I always enjoy going back whenever I get the chance.",
        b9: "I'm originally from Maijdee Court in Noakhali, which is part of the Chattogram division. I was born and raised there, so I’m quite emotionally attached to the place. It’s quite a quiet area, surrounded by a pleasant natural environment, which I really appreciate. Although I currently live in Dhaka for my studies, I still consider Noakhali my hometown and I always enjoy going back whenever I get the chance.",
        meaning: "emotionally = আবেগগতভাবে | environment = পরিবেশ | originally = মূলত / শুরুতে | appreciate = মূল্য বুঝতে পারা"
    },
    {
        id: 6,
        question: "Do you work or study?",
        b75: "I'm a university student. I'm studying for a BBA, majoring in Accounting at Dhaka College, and I just started this year after finishing my HSC at Noakhali Government College. It is still quite new for me, but I'm enjoying it so far.",
        b85: "I'm a university student. I'm studying for a BBA, majoring in Accounting at Dhaka College, and I just started this year after completing my HSC at Noakhali Government College. So it's still quite new for me, but I'm enjoying it so far.",
        b9: "I'm a university student. I'm studying for a BBA, majoring in Accounting at Dhaka College, and I just started this year after completing my HSC at Noakhali Government College. So it's still quite new for me, but I'm enjoying it so far.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 7,
        question: "Do you like your subject?",
        b75: "Yes, I really like it. I chose Accounting mainly because it helps me understand how businesses actually run — things like money decisions and how businesses manage money. Since I want to become a businessman one day, I think this subject gives me a good foundation for that.",
        b85: "Yes, I really like it. I chose Accounting mainly because it helps me understand how businesses actually run — things like money decisions and how businesses manage money. Since I want to become a businessman one day, I think this subject gives me a really solid foundation for that.",
        b9: "Yes, I genuinely enjoy it. I chose Accounting mainly because it helps me understand how businesses actually run — things like financial decisions and how businesses handle their finances. Since I’d like to become a businessman one day, I believe this subject gives me a really solid foundation for that.",
        meaning: "foundation = ভিত্তি | decision = সিদ্ধান্ত | actually = আসলে | manage = পরিচালনা করা"
    },
    {
        id: 8,
        question: "How did your parents choose your name?",
        b75: "I have never asked them about the full story, but I know my name has a religious meaning, since most Bangladeshi Muslim families choose names connected to Islam. I think my parents wanted a name that sounded meaningful and would reflect good values.",
        b85: "Honestly, I've never asked them the full story, but I know my name has a religious meaning, since most Bangladeshi Muslim families choose names connected to Islam. I think my parents wanted a name that sounded meaningful and would represent good values as I grew up.",
        b9: "Honestly, I've never asked them the full story, but I know my name has a religious meaning, since most Bangladeshi Muslim families choose names connected to Islam. I imagine my parents wanted a name that sounded meaningful and would represent good values as I grew up.",
        meaning: "meaningful = অর্থবহ | religious = ধর্মীয় | honestly = সত্যি বলতে | values = মূল্যবোধ"
    },
    {
        id: 9,
        question: "Where do you want to see yourself after 10 years in terms of your career?",
        b75: "In 10 years' time, I'd like to have started my own business, probably something connected to what I'm studying now, since I'm majoring in Accounting. Besides that, I want to keep growing both in my career and personal life, and hopefully be in a position where I can do something good for society as well.",
        b85: "In 10 years' time, I'd like to have established my own business, probably something connected to what I'm studying now, since I'm majoring in Accounting. Besides that, I want to keep growing both professionally and personally, and hopefully be in a position where I can do something good for society as well.",
        b9: "In 10 years' time, I'd like to have established my own business, probably something connected to what I'm studying now, since I'm majoring in Accounting. Besides that, I’d like to keep growing both professionally and personally, and hopefully be in a position where I can do something good for society as well.",
        meaning: "professionally = পেশাগতভাবে | established = প্রতিষ্ঠা করা | society = সমাজ"
    },
    {
        id: 10,
        question: "Tell me about your best friend at school.",
        b75: "My best friend is Aryan — we've known each other since we were kids, because we grew up in the same neighborhood. He's currently studying Law at a private university, while I'm doing Accounting, so our subjects are quite different, but that doesn't really affect our friendship. We usually talk about our studies, personal problems, and future plans whenever we can.",
        b85: "My best friend is Aryan — we've known each other since we were kids, actually, because we grew up in the same neighborhood. He's currently studying Law at a private university, while I'm doing Accounting, so our subjects are quite different, but that doesn't really affect our friendship. We usually talk about our studies, personal problems, and future plans whenever we get the chance.",
        b9: "My best friend is Aryan — we've known each other since we were kids, actually, because we grew up in the same neighborhood. He's currently studying Law at a private university, while I'm doing Accounting, so our subjects are quite different, but that doesn't really affect our friendship. We generally talk about our studies, personal problems, and future plans whenever we get the chance.",
        meaning: "neighborhood = পাড়া / মহল্লা | currently = বর্তমানে | actually = আসলে | usually = সাধারণত | private = ব্যক্তিগত"
    },
    {
        id: 11,
        question: "Do you enjoy studying Accounting? Why or why not?",
        b75: "Yes, I do enjoy it overall, mainly because it connects directly to my interest in business and finance. It can get quite challenging at times, especially with all the calculations and rules to remember, but I think that challenge is actually part of what keeps it interesting for me.",
        b85: "Yes, I do enjoy it overall, mainly because it connects directly to my interest in business and finance. It can get quite challenging at times, especially with all the calculations and rules to remember, but I think that challenge is actually part of what keeps it interesting for me.",
        b9: "Yes, I do enjoy it overall, mainly because it connects directly to my interest in business and finance. It can get quite challenging at times, especially with all the calculations and rules to remember, but I believe that challenge is actually part of what keeps it interesting for me.",
        meaning: "challenging = কঠিন / চ্যালেঞ্জিং | calculation = হিসাব | especially = বিশেষ করে | actually = আসলে"
    },
    {
        id: 12,
        question: "What do you like most about your hometown?",
        b75: "What I like most is probably the peaceful environment and the strong sense of community there. Unlike Dhaka, it's not crowded or noisy, and people generally know each other, which creates a really friendly atmosphere. It also holds a lot of childhood memories for me, so there's an emotional connection as well.",
        b85: "What I like most is probably the peaceful environment and the strong sense of community there. Unlike Dhaka, it's not crowded or noisy, and people generally know each other, which creates a really friendly atmosphere. It also holds a lot of childhood memories for me, so there's an emotional connection as well.",
        b9: "What I like most is probably the peaceful environment and the strong sense of community there. Unlike Dhaka, it's not crowded or noisy, and people generally know each other, which creates a really friendly atmosphere. It also holds a lot of childhood memories for me, so there's an emotional connection as well.",
        meaning: "environment = পরিবেশ | atmosphere = পরিবেশ / আবহ | emotional = আবেগগত | community = সম্প্রদায় / স্থানীয় সমাজ | generally = সাধারণভাবে"
    },
    {
        id: 13,
        question: "Do you prefer living in a city or a village? Why?",
        b75: "That's a bit hard to answer directly, because I appreciate both, honestly. I prefer the city, like Dhaka, for education and career opportunities, since that's really where things are happening in terms of universities and jobs. But I also value the peacefulness and strong community feeling you get in a village or a smaller town, so it really depends on what stage of life I'm at.",
        b85: "That's a bit hard to answer directly, because I appreciate both, honestly. I prefer the city, like Dhaka, for education and career opportunities, since that's really where things are happening in terms of universities and jobs. But I also value the peacefulness and strong community feeling you get in a village or a smaller town, so it really depends on what stage of life I'm at.",
        b9: "That's a bit hard to answer directly, because I appreciate both, honestly. I prefer the city, like Dhaka, for education and career opportunities, since that's really where things are happening in terms of universities and jobs. But I also value the peacefulness and strong community feeling you get in a village or a smaller town, so it really depends on what stage of life I'm at.",
        meaning: "appreciate = মূল্য বুঝতে পারা | community = সম্প্রদায় / স্থানীয় সমাজ | peaceful = শান্তিপূর্ণ | honestly = সত্যি বলতে | career = পেশাজীবন"
    },
    {
        id: 14,
        question: "How often do you meet your best friend?",
        b75: "Honestly, less often than before, since I moved to Dhaka for university and he's still based near our hometown. We used to see each other almost every week, but now it's more like once a month, if that. We stay in touch through messaging or calling quite regularly, though.",
        b85: "Honestly, not as often as before, since I moved to Dhaka for university and he's still based near our hometown. We used to see each other almost every week, but now it's more like once a month, if that. We make up for it by messaging or calling fairly regularly, though.",
        b9: "Honestly, not as often as before, since I moved to Dhaka for university and he's still based near our hometown. We used to see each other almost every week, but now it's more like once a month, if that. We make up for it by messaging or calling fairly regularly, though.",
        meaning: "regularly = নিয়মিত | hometown = নিজের শহর / জন্মস্থান | honestly = সত্যি বলতে"
    },
    {
        id: 15,
        question: "What do you usually do together when you meet?",
        b75: "Mostly we just talk about what has happened since we last met — studies, personal problems, future plans, that kind of thing. We also like grabbing food together sometimes, or just walking around and chatting, without making any special plans.",
        b85: "Mostly we just catch up on everything that's happened since we last met — studies, personal problems, future plans, that kind of thing. We also like grabbing food together sometimes, or just walking around and chatting, nothing too structured, really.",
        b9: "Mostly we just catch up on everything that's happened since we last met — studies, personal problems, future plans, that kind of thing. We also like grabbing food together on some occasions, or just walking around and chatting, nothing too structured, really.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 16,
        question: "Do you think having close friends is important? Why?",
        b75: "Yes, definitely. I think close friends give you support that even family sometimes can't provide in the same way, because friends often understand your generation and your specific struggles better. Also, having someone to share both good and bad times with really makes a difference to your well-being.",
        b85: "Yes, definitely. I think close friends give you emotional support that even family sometimes can't provide in the same way, because friends often understand your generation and your specific struggles better. Also, having someone to share both good and bad times with really makes a difference to your mental well-being.",
        b9: "Yes, definitely. I believe close friends give you emotional support that even family on some occasions can't provide in the same way, because friends often understand your generation and your specific struggles better. Also, having someone to share both good and bad times with really makes a difference to your mental emotional well-being.",
        meaning: "generation = প্রজন্ম | well-being = সুস্থতা ও ভালো থাকা | emotional = আবেগগত | struggle = সংগ্রাম / সমস্যা | support = সহায়তা"
    },
    {
        id: 17,
        question: "What do you study? / Where do you study that?",
        b75: "I'm doing a Bachelor of Business Administration, majoring in Accounting, and I study at Dhaka College here in Dhaka. It's a well-known college, so I'm quite happy to be studying there.",
        b85: "I'm doing a Bachelor of Business Administration, majoring in Accounting, and I study at Dhaka College here in Dhaka. It's a well-known college, so I'm quite happy to be studying there.",
        b9: "I'm doing a Bachelor of Business Administration, majoring in Accounting, and I study at Dhaka College here in Dhaka. It's a well-known college, so I'm quite happy to be studying there.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 18,
        question: "Why did you choose that subject?",
        b75: "I chose Accounting mainly because I've always been interested in how businesses manage their money and make money decisions. Since my goal is to become a successful businessman eventually, I felt this subject would give me the practical knowledge I'd actually need, rather than something purely theoretical.",
        b85: "I chose Accounting mainly because I've always been interested in how businesses manage their money and make money decisions. Since my goal is to become a successful businessman eventually, I felt this subject would give me the practical knowledge I'd actually need, rather than something purely theoretical.",
        b9: "I chose Accounting mainly because I've always been interested in how businesses manage their money and make financial decisions. Since my goal is to become a successful businessman eventually, I felt this subject would give me the practical knowledge I'd actually need, rather than something purely theoretical.",
        meaning: "eventually = শেষ পর্যন্ত | practical = ব্যবহারিক | decision = সিদ্ধান্ত | actually = আসলে | manage = পরিচালনা করা"
    },
    {
        id: 19,
        question: "Is it a popular subject in your country?",
        b75: "Yes, definitely, Business subjects like Accounting are pretty popular in Bangladesh, mainly because they lead to a wide range of career options, like banking, corporate jobs, or even starting your own business. A lot of students see it as a safer, more practical choice compared to some other fields.",
        b85: "Yes, definitely, Business subjects like Accounting are pretty popular in Bangladesh, mainly because they lead to a wide range of career options, like banking, corporate jobs, or even starting your own business. A lot of students see it as a safer, more practical choice compared to some other fields.",
        b9: "Yes, definitely, Business subjects like Accounting are pretty popular in Bangladesh, mainly because they lead to a wide range of career options, like banking, corporate jobs, or even starting your own business. A lot of students see it as a safer, more practical choice compared to some other fields.",
        meaning: "practical = ব্যবহারিক | compared = তুলনা করলে | career = পেশাজীবন | safe = নিরাপদ"
    },
    {
        id: 20,
        question: "Do you like that subject?",
        b75: "Yes, I really do — it fits well with my interest in business and finance, and I can already see how directly useful it will be for whatever I do afterwards, whether that's a job or starting something of my own.",
        b85: "Yes, I really do — it fits well with my interest in business and finance, and I can already see how directly useful it will be for whatever I do afterwards, whether that's a job or starting something of my own.",
        b9: "Yes, I really do — it fits well with my interest in business and finance, and I can already see how directly useful it will be for whatever I do afterwards, whether that's a job or starting something of my own.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 21,
        question: "Do you get on with your classmates?",
        b75: "Yes, generally I do. Since we're all fairly new, we're still in the process of getting to know one another, but so far most of my classmates have been friendly and cooperative, especially when it comes to sharing notes or helping with assignments.",
        b85: "Yes, generally I do. Since we're all fairly new, we're still in the process of getting to know one another, but so far most of my classmates have been friendly and cooperative, especially when it comes to sharing notes or helping with assignments.",
        b9: "Yes, generally I do. Since we're all fairly new, we're still in the process of getting to know one another, but so far most of my classmates have been friendly and cooperative, especially when it comes to sharing notes or helping with assignments.",
        meaning: "cooperative = সহযোগিতাপূর্ণ | especially = বিশেষ করে | assignment = অ্যাসাইনমেন্ট / কাজ | generally = সাধারণভাবে | friendly = বন্ধুসুলভ"
    },
    {
        id: 22,
        question: "What was your first day like?",
        b75: "Honestly, my first day was a mix of nerves and excitement, since I didn't know anyone there yet. But things got easier once I started talking to a few classmates during breaks, and the teachers gave us a clear overview of the course structure, which helped me feel more settled by the end of the day.",
        b85: "Honestly, my first day was a mix of nerves and excitement, since I didn't know anyone there yet. But things got easier once I started talking to a few classmates during breaks, and the teachers gave us a clear overview of the course structure, which helped me feel more settled by the end of the day.",
        b9: "Honestly, my first day was a mix of nerves and excitement, since I didn't know anyone there yet. But things got easier once I started talking to a few classmates during breaks, and the teachers gave us a clear overview of the course structure, which helped me feel more settled by the end of the day.",
        meaning: "honestly = সত্যি বলতে"
    },
    {
        id: 23,
        question: "What are the main aspects of your subject?",
        b75: "Accounting mainly covers how to record and organize financial transactions, prepare financial statements like balance sheets, and understand areas like taxation and auditing. Alongside that, there are also some broader business and management topics, since it's part of a BBA programme rather than a pure accounting degree.",
        b85: "Accounting mainly covers how to record and organize financial transactions, prepare financial statements like balance sheets, and understand areas like taxation and auditing. Alongside that, there are also some broader business and management topics, since it's part of a BBA programme rather than a pure accounting degree.",
        b9: "Accounting mainly covers how to record and organize financial transactions, prepare financial statements like balance sheets, and understand areas like taxation and auditing. Alongside that, there are also some broader business and management topics, since it's part of a BBA programme rather than a pure accounting degree.",
        meaning: "transaction = লেনদেন | financial = আর্থিক | statement = বিবরণী | taxation = করব্যবস্থা | auditing = নিরীক্ষা"
    },
    {
        id: 24,
        question: "Where is your hometown?",
        b75: "My hometown is Maijdee Court in Noakhali, which falls under the Chattogram division. It's a fairly well-known area within the district.",
        b85: "My hometown is Maijdee Court in Noakhali, which falls under the Chattogram division. It's a fairly well-known area within the district.",
        b9: "My hometown is Maijdee Court in Noakhali, which falls under the Chattogram division. It's a fairly well-known area within the district.",
        meaning: "hometown = নিজের শহর / জন্মস্থান | division = বিভাগ"
    },
    {
        id: 25,
        question: "Do you like your hometown?",
        b75: "Yes, definitely. It's quiet compared to Dhaka, people are generally friendly, and it holds a lot of childhood memories for me, so I feel quite attached to it.",
        b85: "Yes, definitely. It's quiet compared to Dhaka, people are generally friendly, and it holds a lot of childhood memories for me, so I feel quite attached to it.",
        b9: "Yes, definitely. It's quiet compared to Dhaka, people are generally friendly, and it holds a lot of childhood memories for me, so I feel quite attached to it.",
        meaning: "generally = সাধারণভাবে | attached = আবেগের টান আছে | memories = স্মৃতি | compared = তুলনা করলে | friendly = বন্ধুসুলভ"
    },
    {
        id: 26,
        question: "Do you often visit your hometown?",
        b75: "Not as often as I'd like, since I'm based in Dhaka now for university. I mostly go back during holidays, especially Eid, or whenever there's a longer break from college.",
        b85: "Not as often as I'd like, to be honest, since I'm based in Dhaka now for university. I mostly go back during holidays, especially Eid, or whenever there's a longer break from college.",
        b9: "Not as often as I'd like, to be honest, since I'm based in Dhaka now for university. I mostly go back during holidays, especially Eid, or whenever there's a longer break from college.",
        meaning: "especially = বিশেষ করে"
    },
    {
        id: 27,
        question: "What is your hometown like?",
        b75: "It's a fairly calm, mid-sized town, quite different from a busy city like Dhaka. There's a good amount of greenery around, and since Noakhali is a coastal district, you can feel that influence in the landscape and lifestyle too. Overall, the atmosphere is relaxed, and people tend to know each other.",
        b85: "It's a fairly calm, mid-sized town, quite different from a busy city like Dhaka. There's a good amount of greenery around, and since Noakhali is a coastal district, you can feel that influence in the landscape and lifestyle too. Overall, the atmosphere is relaxed, and people tend to know each other.",
        b9: "It's a fairly calm, mid-sized town, quite different from a busy city like Dhaka. There's a good amount of greenery around, and since Noakhali is a coastal district, you can feel that influence in the landscape and lifestyle too. Overall, the atmosphere is relaxed, and people tend to know each other.",
        meaning: "atmosphere = পরিবেশ / আবহ | relaxed = স্বস্তিদায়ক | coastal = উপকূলীয় | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 28,
        question: "What is the oldest place in your hometown?",
        b75: "To be honest, I don't know the exact oldest building, but there's definitely an older part of town, around the traditional market area, where some structures have clearly been standing for generations. It has a different character from the newer parts of town.",
        b85: "To be honest, I don't know the exact oldest building, but there's definitely an older part of town, around the traditional market area, where some structures have clearly been standing for generations. It has a different character from the newer parts of town.",
        b9: "To be honest, I don't know the exact oldest building, but there's definitely an older part of town, around the traditional market area, where some structures have clearly been standing for generations. It has a different character from the newer parts of town.",
        meaning: "traditional = ঐতিহ্যবাহী | generation = প্রজন্ম"
    },
    {
        id: 29,
        question: "What is there for a foreigner to do or see in your hometown?",
        b75: "It's not really a typical tourist spot, but a foreigner could still enjoy quite a lot — trying authentic local food, especially seafood since it's a coastal area, exploring the natural scenery, and just getting a genuine feel for everyday Bangladeshi life outside the big cities.",
        b85: "It's not really a typical tourist spot, but a foreigner could still enjoy quite a lot — trying authentic local food, especially seafood since it's a coastal area, exploring the natural scenery, and just getting a genuine feel for everyday Bangladeshi life outside the big cities.",
        b9: "It's not really a typical tourist spot, but a foreigner could still enjoy quite a lot — trying authentic local food, especially seafood since it's a coastal area, exploring the natural scenery, and just getting a genuine feel for everyday Bangladeshi life outside the big cities.",
        meaning: "especially = বিশেষ করে | authentic = আসল / খাঁটি | natural = প্রাকৃতিক | scenery = প্রাকৃতিক দৃশ্য | coastal = উপকূলীয়"
    },
    {
        id: 30,
        question: "How could your hometown be improved?",
        b75: "I think a few things could be improved, actually. The road roads and facilities and public transport could definitely be developed further, and there could be more local job opportunities, especially for young graduates, so people wouldn't feel forced to move to Dhaka just to build a career.",
        b85: "I think a few things could be improved, actually. The road roads and facilities and public transport could definitely be developed further, and there could be more local job opportunities, especially for young graduates, so people wouldn't feel forced to move to Dhaka just to build a career.",
        b9: "I believe a few things could be improved, actually. The road roads and facilities and public transport could definitely be developed further, and there could be more local job opportunities, especially for young graduates, so people wouldn't feel forced to move to Dhaka just to build a career.",
        meaning: "facilities = সুবিধাসমূহ | especially = বিশেষ করে | transport = পরিবহন | developed = উন্নত | actually = আসলে"
    },
    {
        id: 31,
        question: "Has your hometown changed much since you were a child?",
        b75: "Yes, definitely, quite a lot. There are more buildings, shops, and better roads now compared to when I was a child, so it feels more developed. That said, it hasn't lost its peaceful, small-town character, which I'm honestly quite glad about.",
        b85: "Yes, definitely, quite a lot. There are more buildings, shops, and better roads now compared to when I was a child, so it feels more developed. That said, it hasn't lost its peaceful, small-town character, which I'm honestly quite glad about.",
        b9: "Yes, definitely, quite a lot. There are more buildings, shops, and better roads now compared to when I was a child, so it feels more developed. That said, it hasn't lost its peaceful, small-town character, which I'm honestly quite glad about.",
        meaning: "developed = উন্নত | peaceful = শান্তিপূর্ণ | honestly = সত্যি বলতে | compared = তুলনা করলে | develop = উন্নত করা"
    },
    {
        id: 32,
        question: "Is there good public transportation in your hometown?",
        b75: "It's reasonably good for local travel, mainly buses and rickshaws, which are the most common way to get around. That said, the system isn't always well organized, so travelling can take longer than it probably needs to, especially during busier times.",
        b85: "It's reasonably good for local travel, mainly buses and rickshaws, which are the most common way to get around. That said, the system isn't always well organized, so travelling can take longer than it probably needs to, especially during busier times.",
        b9: "It's reasonably good for local travel, mainly buses and rickshaws, which are the most common way to get around. That said, the system isn't always well organized, so travelling can take longer than it probably needs to, especially during busier times.",
        meaning: "especially = বিশেষ করে | local = স্থানীয়"
    },
    {
        id: 33,
        question: "Do you think your hometown is a good place to bring up children?",
        b75: "Yes, I'd say so, definitely. It's safe, peaceful, and there's a strong community feeling, which I think is really valuable for children. They also get more exposure to nature and open space compared to growing up in a crowded city.",
        b85: "Yes, I'd say so, definitely. It's safe, peaceful, and there's a strong community feeling, which I think is really valuable for children. They also get more exposure to nature and open space compared to growing up in a crowded city.",
        b9: "Yes, I'd say so, definitely. It's safe, peaceful, and there's a strong community feeling, which I believe is really valuable for children. They also get more exposure to nature and open space compared to growing up in a crowded city.",
        meaning: "community = সম্প্রদায় / স্থানীয় সমাজ | peaceful = শান্তিপূর্ণ | compared = তুলনা করলে | crowded = জনাকীর্ণ | safe = নিরাপদ"
    },
    {
        id: 34,
        question: "What is your job? / Where do you work?",
        b75: "I don't currently have a job, since I'm studying full-time, but if I imagine my future one, it would probably be something in business or finance, likely based in an office somewhere in Dhaka, at least to start with.",
        b85: "I don't currently have a job, since I'm studying full-time, but if I imagine my future one, it would probably be something in business or finance, likely based in an office somewhere in Dhaka, at least to start with.",
        b9: "I don't currently have a job, since I'm studying full-time, but if I imagine my future one, it would probably be something in business or finance, likely based in an office somewhere in Dhaka, at least to start with.",
        meaning: "currently = বর্তমানে"
    },
    {
        id: 35,
        question: "Why did you choose that job? / Is it a popular job in your country?",
        b75: "I'd probably choose something in business or finance, mainly because it matches my studies and interests. It's a fairly popular field in Bangladesh too, a lot of graduates go into it, since it offers a wide range of career paths.",
        b85: "I'd probably choose something in business or finance, mainly because it matches my studies and interests. It's a fairly popular field in Bangladesh too, a lot of graduates go into it, since it offers a wide range of career paths.",
        b9: "I'd probably choose something in business or finance, mainly because it matches my studies and interests. It's a fairly popular field in Bangladesh too, a lot of graduates go into it, since it offers a wide range of career paths.",
        meaning: "career = পেশাজীবন"
    },
    {
        id: 36,
        question: "Do you like your job? / Do you get on well with your colleagues?",
        b75: "It's hard to say yet, since I don't have a job, but I'd like to think I'd enjoy it, especially if it involves business or finance. Getting along with colleagues would matter a lot to me too, teamwork's important in most workplaces.",
        b85: "It's hard to say yet, since I don't have a job, but I'd like to think I'd enjoy it, especially if it involves business or finance. Getting along with colleagues would matter a lot to me too, teamwork's important in most workplaces.",
        b9: "It's hard to say yet, since I don't have a job, but I'd like to think I'd enjoy it, especially if it involves business or finance. Getting along with colleagues would matter a lot to me too, teamwork's essential in most workplaces.",
        meaning: "especially = বিশেষ করে | colleagues = সহকর্মীরা | colleague = সহকর্মী | teamwork = দলগত কাজ"
    },
    {
        id: 37,
        question: "What responsibilities do you have at work?",
        b75: "I don't have a job yet, but I imagine, based on my studies, that my responsibilities would probably involve things like financial reporting, budgeting, or helping with business decisions in some way.",
        b85: "I don't have a job yet, but I imagine, based on my studies, that my responsibilities would probably involve things like financial reporting, budgeting, or helping with business decisions in some way.",
        b9: "I don't have a job yet, but I imagine, based on my studies, that my responsibilities would probably involve things like financial reporting, budgeting, or helping with business decisions in some way.",
        meaning: "financial reporting = আর্থিক প্রতিবেদন | financial = আর্থিক | budgeting = বাজেট তৈরি | decision = সিদ্ধান্ত"
    },
    {
        id: 38,
        question: "If you had the chance, would you change your job? / Do you plan to change your job in the future?",
        b75: "It's hard to answer directly since I don't have a job yet, but I imagine that even in a future job, I'd want to keep growing, and eventually, my real goal would be moving toward my own business rather than staying in the same role forever.",
        b85: "It's hard to answer directly since I don't have a job yet, but I imagine that even in a future job, I'd want to keep growing, and eventually, my real goal would be moving toward my own business rather than staying in the same role forever.",
        b9: "It's hard to answer directly since I don't have a job yet, but I imagine that even in a future job, I'd want to keep growing, and eventually, my real goal would be moving toward my own business rather than staying in the same role forever.",
        meaning: "eventually = শেষ পর্যন্ত | goal = লক্ষ্য"
    },
    {
        id: 39,
        question: "Where is your home?",
        b75: "My permanent family home is in Noakhali, though I'm currently based in Dhaka for university. So I sort of have two homes at the moment, one where my family lives and one where I actually stay most of the year now.",
        b85: "My permanent family home is in Noakhali, though I'm currently based in Dhaka for university. So I sort of have two homes at the moment, one where my family lives and one where I actually stay most of the year now.",
        b9: "My permanent family home is in Noakhali, though I'm currently based in Dhaka for university. So I sort of have two homes at the moment, one where my family lives and one where I actually stay most of the year now.",
        meaning: "currently = বর্তমানে | actually = আসলে"
    },
    {
        id: 40,
        question: "Do you live in a house or a flat?",
        b75: "My family home in Noakhali is a house, with some outdoor space, which I really enjoy because of my gardening hobby. Here in Dhaka, though, I stay in a shared flat with other students, which is obviously quite different, much smaller and no garden at all.",
        b85: "My family home in Noakhali is a house, with some outdoor space, which I really enjoy because of my gardening hobby. Here in Dhaka, though, I stay in a shared flat with other students, which is obviously quite different, much smaller and no garden at all.",
        b9: "My family home in Noakhali is a house, with some outdoor space, which I really enjoy because of my gardening hobby. Here in Dhaka, though, I stay in a shared flat with other students, which is obviously quite different, much smaller and no garden at all.",
        meaning: "gardening = বাগান করা | outdoor = বাইরের"
    },
    {
        id: 41,
        question: "Who do you live with?",
        b75: "Back home in Noakhali, I live with my parents and the rest of my family. Here in Dhaka, though, I share a place with a couple of other students, so it's quite a different living situation, more independent, but obviously not the same as being with family.",
        b85: "Back home in Noakhali, I live with my parents and the rest of my family. Here in Dhaka, though, I share a place with a couple of other students, so it's quite a different living situation, more independent, but obviously not the same as being with family.",
        b9: "Back home in Noakhali, I live with my parents and the rest of my family. Here in Dhaka, though, I share a place with a couple of other students, so it's quite a different living situation, more independent, but obviously not the same as being with family.",
        meaning: "independent = স্বাধীন"
    },
    {
        id: 42,
        question: "Are there many rooms in your home?",
        b75: "Our family home in Noakhali has a reasonable number of rooms, a few bedrooms, a living room, a kitchen, and some outdoor space too. The flat I stay in in Dhaka is much more compact, though, just a bedroom and shared common areas really, since it's meant for students.",
        b85: "Our family home in Noakhali has a reasonable number of rooms, a few bedrooms, a living room, a kitchen, and some outdoor space too. The flat I stay in in Dhaka is much more compact, though, just a bedroom and shared common areas really, since it's meant for students.",
        b9: "Our family home in Noakhali has a reasonable number of rooms, a few bedrooms, a living room, a kitchen, and some outdoor space too. The flat I stay in in Dhaka is much more compact, though, just a bedroom and shared common areas really, since it's meant for students.",
        meaning: "outdoor = বাইরের"
    },
    {
        id: 43,
        question: "What is your favourite room?",
        b75: "I'd say my bedroom back home in Noakhali, mainly because it's quiet, and it overlooks part of our garden, so I get to see the flowers and trees I've grown, which is quite relaxing, honestly.",
        b85: "I'd say my bedroom back home in Noakhali, mainly because it's quiet, and it overlooks part of our garden, so I get to see the flowers and trees I've grown, which is quite relaxing, honestly.",
        b9: "I'd say my bedroom back home in Noakhali, mainly because it's quiet, and it overlooks part of our garden, so I get to see the flowers and trees I've grown, which is quite relaxing, honestly.",
        meaning: "honestly = সত্যি বলতে | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 44,
        question: "How are the walls decorated?",
        b75: "Honestly, the walls in my room are pretty simple, just a light paint colour without much decoration, maybe a calendar and a small shelf for books. I've never really been someone who decorates a lot, I prefer things to feel clean and uncluttered.",
        b85: "Honestly, the walls in my room are pretty simple, just a light paint colour without much decoration, maybe a calendar and a small shelf for books. I've never really been someone who decorates a lot, I prefer things to feel clean and uncluttered.",
        b9: "Honestly, the walls in my room are pretty simple, just a light paint colour without much decoration, maybe a calendar and a small shelf for books. I've never really been someone who decorates a lot, I prefer things to feel clean and uncluttered.",
        meaning: "honestly = সত্যি বলতে | prefer = বেশি পছন্দ করা"
    },
    {
        id: 45,
        question: "What would you change about your home?",
        b75: "If I could change something, I'd probably want more outdoor space for gardening, since I really enjoy growing flowers and trees. Also, a more reliable internet connection would be really useful, especially for online classes and research.",
        b85: "If I could change something, I'd probably want more outdoor space for gardening, since I really enjoy growing flowers and trees. Also, a more reliable internet connection would be really useful, especially for online classes and research.",
        b9: "If I could change something, I'd probably want more outdoor space for gardening, since I really enjoy growing flowers and trees. Also, a more reliable internet connection would be really useful, especially for online classes and research.",
        meaning: "especially = বিশেষ করে | gardening = বাগান করা | reliable = বিশ্বস্ত | outdoor = বাইরের"
    },
    {
        id: 46,
        question: "Do you plan to live there in the future?",
        b75: "I don't think I'll stay in Dhaka permanently, it's mainly for university right now. As for Noakhali, I'd like to keep a strong connection there, even if my career eventually takes me somewhere else, maybe even abroad.",
        b85: "I don't think I'll stay in Dhaka permanently, it's mainly for university right now. As for Noakhali, I'd like to keep a strong connection there, even if my career eventually takes me somewhere else, maybe even abroad.",
        b9: "I don't think I'll stay in Dhaka permanently, it's mainly for university right now. As for Noakhali, I'd like to keep a strong connection there, even if my career eventually takes me somewhere else, maybe even abroad.",
        meaning: "eventually = শেষ পর্যন্ত | career = পেশাজীবন"
    },
    {
        id: 47,
        question: "What facilities are there near your home?",
        b75: "Near our home in Noakhali, there's a local market, some shops, and a mosque within walking distance, which is convenient. Here in Dhaka, though, there's a lot more available, bigger shopping areas, restaurants, and much better transport links, since it's a capital city after all.",
        b85: "Near our home in Noakhali, there's a local market, some shops, and a mosque within walking distance, which is convenient. Here in Dhaka, though, there's a lot more available, bigger shopping areas, restaurants, and much better transport links, since it's a capital city after all.",
        b9: "Near our home in Noakhali, there's a local market, some shops, and a mosque within walking distance, which is convenient. Here in Dhaka, though, there's a lot more available, bigger shopping areas, restaurants, and much better transport links, since it's a capital city after all.",
        meaning: "convenient = সুবিধাজনক | transport = পরিবহন | available = পাওয়া যায় এমন | local = স্থানীয়"
    },
    {
        id: 48,
        question: "What is your neighbourhood like?",
        b75: "My neighborhood back home in Noakhali is pretty quiet and friendly, most people know each other, which makes it feel safe and welcoming. My area in Dhaka is quite different, much busier and more crowded, but it still has a decent, functional feel to it despite the pace.",
        b85: "My neighborhood back home in Noakhali is pretty quiet and friendly, most people know each other, which makes it feel safe and welcoming. My area in Dhaka is quite different, much busier and more crowded, but it still has a decent, functional feel to it despite the pace.",
        b9: "My neighborhood back home in Noakhali is pretty quiet and friendly, most people know each other, which makes it feel safe and welcoming. My area in Dhaka is quite different, much busier and more crowded, but it still has a decent, functional feel to it despite the pace.",
        meaning: "neighborhood = পাড়া / মহল্লা | functional = কাজের উপযোগী | friendly = বন্ধুসুলভ | crowded = জনাকীর্ণ | safe = নিরাপদ"
    },
    {
        id: 49,
        question: "Do most people live in houses in your country?",
        b75: "It really depends on where you are. In villages and smaller towns, houses are much more common, since there's more available land. But in bigger cities like Dhaka, flats and apartments are far more typical, mainly because space is so limited and the population is so dense.",
        b85: "It really depends on where you are. In villages and smaller towns, houses are much more common, since there's more available land. But in bigger cities like Dhaka, flats and apartments are far more typical, mainly because space is so limited and the population is so dense.",
        b9: "It really depends on where you are. In villages and smaller towns, houses are much more common, since there's more available land. But in bigger cities like Dhaka, flats and apartments are far more typical, mainly because space is so limited and the population is so dense.",
        meaning: "available = পাওয়া যায় এমন"
    },
    {
        id: 50,
        question: "Are you good at art?",
        b75: "Honestly, not especially. Drawing and painting were never really my strong points, even back in school. I've always been more drawn to practical things, like business or gardening, so I just never invested much time in developing artistic skills.",
        b85: "Honestly, not especially. Drawing and painting were never really my strong points, even back in school. I've always been more drawn to practical things, like business or gardening, so I just never invested much time in developing artistic skills.",
        b9: "Honestly, not especially. Drawing and painting were never really my strong points, even back in school. I've always been more drawn to practical things, like business or gardening, so I just never invested much time in developing artistic skills.",
        meaning: "especially = বিশেষ করে | practical = ব্যবহারিক | gardening = বাগান করা | honestly = সত্যি বলতে | develop = উন্নত করা"
    },
    {
        id: 51,
        question: "Did you learn art at school when you were a child?",
        b75: "Yes, we did have art classes as part of the school curriculum, mostly basic drawing and painting. I attended them, obviously, but I never really connected with the subject the way some of my classmates seemed to.",
        b85: "Yes, we did have art classes as part of the school curriculum, mostly basic drawing and painting. I attended them, obviously, but I never really connected with the subject the way some of my classmates seemed to.",
        b9: "Yes, we did have art classes as part of the school curriculum, mostly basic drawing and painting. I attended them, obviously, but I never really connected with the subject the way some of my classmates seemed to.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 52,
        question: "What kind of art do you like?",
        b75: "If I had to choose, I'd say Islamic calligraphy, mainly because it combines beauty with meaning, it's not just decorative, it usually carries a verse or a message. I don't know a huge amount about other art forms, but that's the one that genuinely appeals to me.",
        b85: "If I had to choose, I'd say Islamic calligraphy, mainly because it combines beauty with meaning, it's not just decorative, it usually carries a verse or a message. I don't know a huge amount about other art forms, to be honest, but that's the one that genuinely appeals to me.",
        b9: "If I had to choose, I'd say Islamic calligraphy, mainly because it combines beauty with meaning, it's not just decorative, it generally carries a verse or a message. I don't know a huge amount about other art forms, to be honest, but that's the one that genuinely appeals to me.",
        meaning: "usually = সাধারণত"
    },
    {
        id: 53,
        question: "Is art popular in your country?",
        b75: "I'd say traditional art forms, calligraphy, folk art, things like that, are pretty popular and widely appreciated across Bangladesh. Modern or contemporary art, though, tends to be more concentrated in big cities like Dhaka, where there are proper galleries and exhibitions.",
        b85: "I'd say traditional art forms, calligraphy, folk art, things like that, are pretty popular and widely appreciated across Bangladesh. Modern or contemporary art, though, tends to be more concentrated in big cities like Dhaka, where there are proper galleries and exhibitions.",
        b9: "I'd say traditional art forms, calligraphy, folk art, things like that, are pretty popular and widely appreciated across Bangladesh. Modern or contemporary art, though, tends to be more concentrated in big cities like Dhaka, where there are proper galleries and exhibitions.",
        meaning: "traditional = ঐতিহ্যবাহী | appreciate = মূল্য বুঝতে পারা | modern = আধুনিক"
    },
    {
        id: 54,
        question: "Have you ever been to an art gallery?",
        b75: "Honestly, no, I haven't, not properly at least. It's just never really been a priority for me, since my interests have always leaned more toward business and nature rather than fine art.",
        b85: "Honestly, no, I haven't, not properly at least. It's just never really been a priority for me, since my interests have always leaned more toward business and nature rather than fine art.",
        b9: "Honestly, no, I haven't, not properly at least. It's just never really been a priority for me, since my interests have always leaned more toward business and nature rather than fine art.",
        meaning: "priority = অগ্রাধিকার | honestly = সত্যি বলতে"
    },
    {
        id: 55,
        question: "Do you think children can benefit from going to art galleries?",
        b75: "Yes, definitely, I think it can be really beneficial. Exposure to art from an early age can help children develop creativity and also teaches them to appreciate different perspectives, not just in art, but maybe in life more generally too.",
        b85: "Yes, definitely, I think it can be really beneficial. Exposure to art from an early age can help children develop creativity and also teaches them to appreciate different perspectives, not just in art, but maybe in life more generally too.",
        b9: "Yes, definitely, I believe it can be really beneficial. Exposure to art from an early age can help children develop creativity and also teaches them to appreciate different perspectives, not just in art, but maybe in life more generally too.",
        meaning: "perspective = দৃষ্টিভঙ্গি | appreciate = মূল্য বুঝতে পারা | beneficial = উপকারী | generally = সাধারণভাবে | develop = উন্নত করা"
    },
    {
        id: 56,
        question: "Do you have a bike?",
        b75: "No, not currently. I did have one when I was a kid and used it quite a bit back then, but these days I mostly rely on rickshaws for short distances and buses for longer ones.",
        b85: "No, not currently. I did have one when I was a kid and used it quite a bit back then, but these days I mostly rely on rickshaws for short distances and buses for longer ones.",
        b9: "No, not currently. I did have one when I was a kid and used it quite a bit back then, but these days I mostly rely on rickshaws for short distances and buses for longer ones.",
        meaning: "currently = বর্তমানে"
    },
    {
        id: 57,
        question: "How often do you use it?",
        b75: "I don't really use one nowadays, since I don't own a bike anymore. For short distances, I usually just walk or take a rickshaw, and for anything further, I'll take a bus.",
        b85: "I don't really use one nowadays, since I don't own a bike anymore. For short distances, I usually just walk or take a rickshaw, and for anything further, I'll take a bus.",
        b9: "I don't really use one nowadays, since I don't own a bike anymore. For short distances, I generally just walk or take a rickshaw, and for anything further, I'll take a bus.",
        meaning: "usually = সাধারণত"
    },
    {
        id: 58,
        question: "How old were you when you learned to ride a bike?",
        b75: "I was around seven or eight, I think, when I first learned. It was one of my relatives who taught me, though I don't remember the exact details anymore, it's been a while.",
        b85: "I was around seven or eight, I think, when I first learned. It was one of my relatives who taught me, though I don't remember the exact details anymore, it's been a while.",
        b9: "I was around seven or eight, I believe, when I first learned. It was one of my relatives who taught me, though I don't remember the exact details anymore, it's been a while.",
        meaning: "relatives = আত্মীয়স্বজন"
    },
    {
        id: 59,
        question: "Do many people in your country use bicycles?",
        b75: "Yes, bicycles are still fairly common, especially in rural areas and smaller towns where the roads are quieter and more suitable for cycling. In busy cities like Dhaka, though, fewer people cycle, mainly because the traffic makes it quite dangerous and impractical.",
        b85: "Yes, bicycles are still fairly common, especially in rural areas and smaller towns where the roads are quieter and more suitable for cycling. In busy cities like Dhaka, though, fewer people cycle, mainly because the traffic makes it quite dangerous and impractical.",
        b9: "Yes, bicycles are still fairly common, especially in rural areas and smaller towns where the roads are quieter and more suitable for cycling. In busy cities like Dhaka, though, fewer people cycle, mainly because the traffic makes it quite dangerous and impractical.",
        meaning: "especially = বিশেষ করে | practical = ব্যবহারিক | rural = গ্রামীণ"
    },
    {
        id: 60,
        question: "Do you think using bicycles should be encouraged?",
        b75: "Yes, definitely, I think it should be encouraged more. Cycling is great exercise, it's environmentally friendly since it doesn't produce any pollution, and it can also help reduce traffic traffic in cities if more people used bikes instead of cars.",
        b85: "Yes, definitely, I think it should be encouraged more. Cycling is great exercise, it's environmentally friendly since it doesn't produce any pollution, and it can also help reduce traffic traffic in cities if more people used bikes instead of cars.",
        b9: "Yes, definitely, I believe it should be encouraged more. Cycling is great exercise, it's environmentally friendly since it doesn't produce any pollution, and it can also help reduce traffic traffic in cities if more people used bikes instead of cars.",
        meaning: "environmentally = পরিবেশগতভাবে | environment = পরিবেশ | encouraged = উৎসাহিত করা | pollution = দূষণ | friendly = বন্ধুসুলভ"
    },
    {
        id: 61,
        question: "Did you enjoy your childhood?",
        b75: "Yes, definitely, I'd say I had a genuinely happy childhood. Growing up in Noakhali, I got to spend a lot of time outdoors, playing with friends and later developing an interest in gardening, so it was quite a peaceful and active childhood overall.",
        b85: "Yes, definitely, I'd say I had a genuinely happy childhood. Growing up in Noakhali, I got to spend a lot of time outdoors, playing with friends and later developing an interest in gardening, so it was quite a peaceful and active childhood overall.",
        b9: "Yes, definitely, I'd say I had a genuinely happy childhood. Growing up in Noakhali, I got to spend a lot of time outdoors, playing with friends and later developing an interest in gardening, so it was quite a peaceful and active childhood overall.",
        meaning: "gardening = বাগান করা | peaceful = শান্তিপূর্ণ | develop = উন্নত করা | outdoor = বাইরের"
    },
    {
        id: 62,
        question: "What is your first memory of your childhood?",
        b75: "One of my earliest memories is probably being in our garden at home, maybe helping my parents plant something, or just playing around the flowers and trees. It's a fairly simple memory, but it's stuck with me for some reason.",
        b85: "One of my earliest memories is probably being in our garden at home, maybe helping my parents plant something, or just playing around the flowers and trees. It's a fairly simple memory, but it's stuck with me for some reason.",
        b9: "One of my earliest memories is probably being in our garden at home, maybe helping my parents plant something, or just playing around the flowers and trees. It's a fairly simple memory, but it's stuck with me for some reason.",
        meaning: "memories = স্মৃতি"
    },
    {
        id: 63,
        question: "Did you have a lot of friends when you were a child?",
        b75: "Yes, I had a decent group of friends growing up, mostly kids from the neighborhood. We'd play outside together most afternoons after school, so there was always someone around to hang out with.",
        b85: "Yes, I had a decent group of friends growing up, mostly kids from the neighborhood. We'd play outside together most afternoons after school, so there was always someone around to hang out with.",
        b9: "Yes, I had a decent group of friends growing up, mostly kids from the neighborhood. We'd play outside together most afternoons after school, so there was always someone around to hang out with.",
        meaning: "neighborhood = পাড়া / মহল্লা"
    },
    {
        id: 64,
        question: "What did you enjoy doing as a child?",
        b75: "I really enjoyed being outdoors as a child, especially in our garden, helping look after the plants and flowers. I also loved spending time with animals, we had dogs and cats at home, so that was a big part of my childhood too.",
        b85: "I really enjoyed being outdoors as a child, especially in our garden, helping look after the plants and flowers. I also loved spending time with animals, we had dogs and cats at home, so that was a big part of my childhood too.",
        b9: "I really enjoyed being outdoors as a child, especially in our garden, helping look after the plants and flowers. I also loved spending time with animals, we had dogs and cats at home, so that was a big part of my childhood too.",
        meaning: "especially = বিশেষ করে | look after = যত্ন নেওয়া | outdoor = বাইরের"
    },
    {
        id: 65,
        question: "Do you think it is better for children to grow up in the city or in the countryside?",
        b75: "I'd lean toward the countryside, personally, mainly because of the open space, nature, and safety. That said, cities do offer better educational and extracurricular opportunities, so I think an ideal childhood might combine both somehow.",
        b85: "I'd lean toward the countryside, personally, mainly because of the open space, nature, and safety. That said, cities do offer better educational and extracurricular opportunities, so honestly, I think an ideal childhood might combine both somehow.",
        b9: "I'd lean toward the countryside, personally, mainly because of the open space, nature, and safety. That said, cities do offer better educational and extracurricular opportunities, so honestly, I believe an ideal childhood might combine both somehow.",
        meaning: "honestly = সত্যি বলতে | safety = নিরাপত্তা | safe = নিরাপদ"
    },
    {
        id: 66,
        question: "Do you usually celebrate your birthdays?",
        b75: "Not really in a big way, no. It's usually a fairly low-key thing, maybe a small gathering with family, or my parents cook something special, but I've never been someone who needs a big party to feel celebrated.",
        b85: "Not really in a big way, no. It's usually a fairly low-key thing, maybe a small gathering with family, or my parents cook something special, but I've never been someone who needs a big party to feel celebrated.",
        b9: "Not really in a big way, no. It's generally a fairly low-key thing, maybe a small gathering with family, or my parents cook something special, but I've never been someone who needs a big party to feel celebrated.",
        meaning: "usually = সাধারণত | low-key = সাদামাটা"
    },
    {
        id: 67,
        question: "How did you celebrate your last birthday?",
        b75: "My last birthday was fairly simple, I spent it at home with family, we had a nice meal together, and a few relatives called to wish me well. Nothing expensive, but it was a nice, relaxed day overall.",
        b85: "My last birthday was fairly simple, actually, I spent it at home with family, we had a nice meal together, and a few relatives called to wish me well. Nothing expensive, but it was a nice, relaxed day overall.",
        b9: "My last birthday was fairly simple, actually, I spent it at home with family, we had a nice meal together, and a few relatives called to wish me well. Nothing expensive, but it was a nice, relaxed day overall.",
        meaning: "relatives = আত্মীয়স্বজন | actually = আসলে | relaxed = স্বস্তিদায়ক | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 68,
        question: "Which birthdays are the most important ones in your country?",
        b75: "I'd say turning 18 is probably seen as significant, since that's when you're legally considered an adult. Beyond that, though, I don't think Bangladeshi culture places huge emphasis on specific milestone birthdays the way some other countries do.",
        b85: "I'd say turning 18 is probably seen as significant, since that's when you're legally considered an adult. Beyond that, though, I don't think Bangladeshi culture places huge emphasis on specific milestone birthdays the way some other countries do.",
        b9: "I'd say turning 18 is probably seen as significant, since that's when you're legally considered an adult. Beyond that, though, I don't think Bangladeshi culture places huge emphasis on specific milestone birthdays the way some other countries do.",
        meaning: "culture = সংস্কৃতি"
    },
    {
        id: 69,
        question: "Do you think children should celebrate their birthdays with a party?",
        b75: "Yes, I think it can be a nice thing for children, a small party gives them something to look forward to, and it's a good chance to spend time with friends and family in a fun setting.",
        b85: "Yes, I think it can be a nice thing for children, a small party gives them something to look forward to, and it's a good chance to spend time with friends and family in a fun setting.",
        b9: "Yes, I believe it can be a nice thing for children, a small party gives them something to look forward to, and it's a good chance to spend time with friends and family in a fun setting.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 70,
        question: "Are clothes important to you?",
        b75: "Not hugely, no, though I do care about looking neat and presentable. I've never really been someone who chases fashion trends, I just prefer simple, comfortable clothing that suits the occasion.",
        b85: "Not hugely, no, though I do care about looking neat and presentable. I've never really been someone who chases fashion trends, I just prefer simple, comfortable clothing that suits the occasion.",
        b9: "Not hugely, no, though I do care about looking neat and presentable. I've never really been someone who chases fashion trends, I just prefer simple, comfortable clothing that suits the occasion.",
        meaning: "comfortable = আরামদায়ক | occasion = অনুষ্ঠান / উপলক্ষ | prefer = বেশি পছন্দ করা"
    },
    {
        id: 71,
        question: "What kind of clothes do you usually wear?",
        b75: "Day to day, I mostly wear casual clothes, shirts, trousers, that kind of thing, and I switch to a panjabi for religious or family occasions. Comfort is really my main priority when choosing what to wear.",
        b85: "Day to day, I mostly wear casual clothes, shirts, trousers, that kind of thing, and I switch to a panjabi for religious or family occasions. Comfort is really my main priority when choosing what to wear.",
        b9: "Day to day, I mostly wear casual clothes, shirts, trousers, that kind of thing, and I switch to a panjabi for religious or family occasions. Comfort is really my main priority when choosing what to wear.",
        meaning: "religious = ধর্মীয় | occasion = অনুষ্ঠান / উপলক্ষ | priority = অগ্রাধিকার"
    },
    {
        id: 72,
        question: "Do you ever wear the traditional clothes of your country?",
        b75: "Yes, definitely, I wear a panjabi fairly often, especially during Eid, Friday prayers, or other religious and family occasions. It feels like an important part of our culture, so I actually enjoy wearing it.",
        b85: "Yes, definitely, I wear a panjabi fairly often, especially during Eid, Friday prayers, or other religious and family occasions. It feels like an important part of our culture, so I actually enjoy wearing it.",
        b9: "Yes, definitely, I wear a panjabi fairly often, especially during Eid, Friday prayers, or other religious and family occasions. It feels like an essential part of our culture, so I actually enjoy wearing it.",
        meaning: "especially = বিশেষ করে | religious = ধর্মীয় | occasion = অনুষ্ঠান / উপলক্ষ | actually = আসলে | culture = সংস্কৃতি"
    },
    {
        id: 73,
        question: "Where do you usually buy your clothes?",
        b75: "I mostly buy clothes from local shops or markets, they're convenient and reasonably priced. Occasionally, I'll go to a bigger shopping mall in Dhaka if I'm looking for something specific.",
        b85: "I mostly buy clothes from local shops or markets, they're convenient and reasonably priced. Occasionally, I'll go to a bigger shopping mall in Dhaka if I'm looking for something specific.",
        b9: "I mostly buy clothes from local shops or markets, they're convenient and reasonably priced. Occasionally, I'll go to a bigger shopping mall in Dhaka if I'm looking for something specific.",
        meaning: "occasionally = মাঝেমধ্যে | convenient = সুবিধাজনক | occasion = অনুষ্ঠান / উপলক্ষ | local = স্থানীয়"
    },
    {
        id: 74,
        question: "Have you ever worn a uniform?",
        b75: "Yes, I did, throughout my HSC years at Noakhali Government College, we had a standard uniform, a shirt and trousers in specific colours. Now that I'm at Dhaka College for my BBA, though, there's no uniform requirement anymore.",
        b85: "Yes, I did, throughout my HSC years at Noakhali Government College, we had a standard uniform, a shirt and trousers in specific colours. Now that I'm at Dhaka College for my BBA, though, there's no uniform requirement anymore.",
        b9: "Yes, I did, throughout my HSC years at Noakhali Government College, we had a standard uniform, a shirt and trousers in specific colours. Now that I'm at Dhaka College for my BBA, though, there's no uniform requirement anymore.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 75,
        question: "Do most people in your country follow fashion?",
        b75: "I'd say it depends a lot on age and location. Younger people, especially in cities like Dhaka, tend to follow fashion trends pretty closely, often influenced by social media. In smaller towns and villages, though, people generally stick to simpler, more traditional styles.",
        b85: "I'd say it depends a lot on age and location. Younger people, especially in cities like Dhaka, tend to follow fashion trends pretty closely, often influenced by social media. In smaller towns and villages, though, people generally stick to simpler, more traditional styles.",
        b9: "I'd say it depends a lot on age and location. Younger people, especially in cities like Dhaka, tend to follow fashion trends pretty closely, often influenced by social media. In smaller towns and villages, though, people generally stick to simpler, more traditional styles.",
        meaning: "traditional = ঐতিহ্যবাহী | especially = বিশেষ করে | generally = সাধারণভাবে"
    },
    {
        id: 76,
        question: "Do you often use a computer?",
        b75: "Yes, pretty regularly, mostly for academic purposes, research for assignments, writing reports, that kind of thing. I also use it to watch educational content and follow the news sometimes.",
        b85: "Yes, pretty regularly, actually, mostly for academic purposes, research for assignments, writing reports, that kind of thing. I also use it to watch educational content and follow the news sometimes.",
        b9: "Yes, pretty regularly, actually, mostly for academic purposes, research for assignments, writing reports, that kind of thing. I also use it to watch educational content and follow the news on some occasions.",
        meaning: "assignment = অ্যাসাইনমেন্ট / কাজ | regularly = নিয়মিত | actually = আসলে | academic = শিক্ষাসংক্রান্ত"
    },
    {
        id: 77,
        question: "How do you usually get online?",
        b75: "Mostly through mobile data or wifi, whichever is more convenient at the time. I use my phone for quick things, but for anything more serious, like assignments or research, I'll switch to my laptop.",
        b85: "Mostly through mobile data or wifi, whichever is more convenient at the time. I use my phone for quick things, but for anything more serious, like assignments or research, I'll switch to my laptop.",
        b9: "Mostly through mobile data or wifi, whichever is more convenient at the time. I use my phone for quick things, but for anything more serious, like assignments or research, I'll switch to my laptop.",
        meaning: "convenient = সুবিধাজনক | assignment = অ্যাসাইনমেন্ট / কাজ"
    },
    {
        id: 78,
        question: "Do you prefer desktops or laptops?",
        b75: "Definitely laptops, mainly because of the portability. As a student, I need to carry it to college sometimes, or move around the house, so a desktop just wouldn't be practical for my situation.",
        b85: "Definitely laptops, mainly because of the portability. As a student, I need to carry it to college sometimes, or move around the house, so a desktop just wouldn't be practical for my situation.",
        b9: "Definitely laptops, mainly because of the portability. As a student, I need to carry it to college on some occasions, or move around the house, so a desktop just wouldn't be practical for my situation.",
        meaning: "practical = ব্যবহারিক"
    },
    {
        id: 79,
        question: "What do you use your computer for?",
        b75: "Mainly for academic work, research, writing assignments, preparing presentations, that kind of thing. Besides that, I also use it to watch educational content, follow business news, and occasionally for some light entertainment too.",
        b85: "Mainly for academic work, research, writing assignments, preparing presentations, that kind of thing. Besides that, I also use it to watch educational content, follow business news, and occasionally for some light entertainment too.",
        b9: "Mainly for academic work, research, writing assignments, preparing presentations, that kind of thing. Besides that, I also use it to watch educational content, follow business news, and occasionally for some light entertainment too.",
        meaning: "occasionally = মাঝেমধ্যে | assignment = অ্যাসাইনমেন্ট / কাজ | occasion = অনুষ্ঠান / উপলক্ষ | academic = শিক্ষাসংক্রান্ত"
    },
    {
        id: 80,
        question: "Do you think it is important to learn how to use a computer?",
        b75: "Yes, absolutely, I'd say it's almost essential nowadays. Nearly every career path requires at least basic computer skills, so not knowing how to use one would really limit someone's opportunities, especially in a field like business.",
        b85: "Yes, absolutely, I'd say it's almost essential nowadays. Nearly every career path requires at least basic computer skills, so not knowing how to use one would really limit someone's opportunities, especially in a field like business.",
        b9: "Yes, absolutely, I'd say it's almost essential nowadays. Nearly every career path requires at least basic computer skills, so not knowing how to use one would really limit someone's opportunities, especially in a field like business.",
        meaning: "especially = বিশেষ করে | career = পেশাজীবন"
    },
    {
        id: 81,
        question: "When do you usually get up in the morning?",
        b75: "I usually wake up around 6 or 6:30 for Fajr prayer, and depending on how tired I'm, I'll either go back to sleep for a short while or just start getting ready for the day.",
        b85: "I usually wake up around 6 or 6:30 for Fajr prayer, and depending on how tired I'm, I'll either go back to sleep for a short while or just start getting ready for the day.",
        b9: "I generally wake up around 6 or 6:30 for Fajr prayer, and depending on how tired I'm, I'll either go back to sleep for a short while or just start getting ready for the day.",
        meaning: "usually = সাধারণত"
    },
    {
        id: 82,
        question: "Do you usually have the same routine every day? What is your daily routine?",
        b75: "On college days, yes, it's fairly consistent, wake up, pray, go to Dhaka College, attend classes, come back and study a bit, and then relax in the evening. Weekends tend to be more flexible, though, especially when I'm back home and can spend time gardening.",
        b85: "On college days, yes, it's fairly consistent, wake up, pray, go to Dhaka College, attend classes, come back and study a bit, and then relax in the evening. Weekends tend to be more flexible, though, especially when I'm back home and can spend time gardening.",
        b9: "On college days, yes, it's fairly consistent, wake up, pray, go to Dhaka College, attend classes, come back and study a bit, and then relax in the evening. Weekends tend to be more flexible, though, especially when I'm back home and can spend time gardening.",
        meaning: "especially = বিশেষ করে | gardening = বাগান করা | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 83,
        question: "Do you ever change your routine?",
        b75: "Yes, definitely, my routine shifts quite a bit during exam periods, when I study a lot more, or during holidays, when things get much more relaxed. It also changes completely whenever I go back to Noakhali.",
        b85: "Yes, definitely, my routine shifts quite a bit during exam periods, when I study a lot more, or during holidays, when things get much more relaxed. It also changes completely whenever I go back to Noakhali.",
        b9: "Yes, definitely, my routine shifts quite a bit during exam periods, when I study a lot more, or during holidays, when things get much more relaxed. It also changes completely whenever I go back to Noakhali.",
        meaning: "relaxed = স্বস্তিদায়ক | routine = দৈনন্দিন রুটিন | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 84,
        question: "Is your routine the same today as it was when you were a child?",
        b75: "No, not at all, really. As a child, my day revolved around playing outside, school, and just being with family. Now, it's much more study-focused, since I'm at university and living away from home for most of the year.",
        b85: "No, not at all, really. As a child, my day revolved around playing outside, school, and just being with family. Now, it's much more study-focused, since I'm at university and living away from home for most of the year.",
        b9: "No, not at all, really. As a child, my day revolved around playing outside, school, and just being with family. Now, it's much more study-focused, since I'm at university and living away from home for most of the year.",
        meaning: "focus = মনোযোগ দেওয়া"
    },
    {
        id: 85,
        question: "Do you think it is important to have a daily routine?",
        b75: "Yes, definitely, I think a routine is really important. It helps you manage your time efficiently, stay disciplined, and make sure important things, like studying or prayer, don't get neglected.",
        b85: "Yes, definitely, I think a routine is really important. It helps you manage your time efficiently, stay disciplined, and make sure important things, like studying or prayer, don't get neglected.",
        b9: "Yes, definitely, I believe a routine is really essential. It helps you manage your time efficiently, stay disciplined, and make sure essential things, like studying or prayer, don't get neglected.",
        meaning: "routine = দৈনন্দিন রুটিন | manage = পরিচালনা করা"
    },
    {
        id: 86,
        question: "Do you often have dreams when you sleep?",
        b75: "Yes, I'd say fairly often, though it really depends on the night. Some dreams are pretty strange and random, while others just seem to reflect ordinary things from my day, like college or family.",
        b85: "Yes, I'd say fairly often, actually, though it really depends on the night. Some dreams are pretty strange and random, while others just seem to reflect ordinary things from my day, like college or family.",
        b9: "Yes, I'd say fairly often, actually, though it really depends on the night. Some dreams are pretty strange and random, while others just seem to reflect ordinary things from my day, like college or family.",
        meaning: "actually = আসলে"
    },
    {
        id: 87,
        question: "Do you usually remember your dreams?",
        b75: "Not really, no, not in detail anyway. I might remember a dream clearly right when I wake up, but it usually fades pretty fast once I get up and start my day.",
        b85: "Not really, no, not in detail anyway. I might remember a dream clearly right when I wake up, but it usually fades pretty fast once I get up and start my day.",
        b9: "Not really, no, not in detail anyway. I might remember a dream clearly right when I wake up, but it generally fades pretty fast once I get up and start my day.",
        meaning: "usually = সাধারণত"
    },
    {
        id: 88,
        question: "Do you think dreams are important to remember?",
        b75: "I'm not entirely sure, to be honest. Some people believe dreams can reveal something about your subconscious thoughts or worries, but personally, I don't put too much weight on them, I see them more as just random mental activity.",
        b85: "I'm not entirely sure, to be honest. Some people believe dreams can reveal something about your subconscious thoughts or worries, but personally, I don't put too much weight on them, I see them more as just random mental activity.",
        b9: "I'm not entirely sure, to be honest. Some people believe dreams can reveal something about your subconscious thoughts or worries, but personally, I don't put too much weight on them, I see them more as just random mental activity.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 89,
        question: "Do you ever have daydreams?",
        b75: "Yes, quite often, especially when I'm a bit tired or bored, sometimes even during a lecture. I usually end up thinking about my future, my career plans, that sort of thing.",
        b85: "Yes, quite often, actually, especially when I'm a bit tired or bored, sometimes even during a lecture. I usually end up thinking about my future, my career plans, that sort of thing.",
        b9: "Yes, quite often, actually, especially when I'm a bit tired or bored, on some occasions even during a lecture. I generally end up thinking about my future, my career plans, that sort of thing.",
        meaning: "especially = বিশেষ করে | actually = আসলে | usually = সাধারণত | career = পেশাজীবন"
    },
    {
        id: 90,
        question: "What kind of daydreams do you usually have?",
        b75: "Mostly about my future, what my career might look like, running my own business eventually. Sometimes my mind wanders back to simpler things too, like my garden back home, or just relaxing days in Noakhali.",
        b85: "Mostly about my future, actually, what my career might look like, running my own business eventually. Sometimes my mind wanders back to simpler things too, like my garden back home, or just relaxing days in Noakhali.",
        b9: "Mostly about my future, actually, what my career might look like, running my own business eventually. Sometimes my mind wanders back to simpler things too, like my garden back home, or just relaxing days in Noakhali.",
        meaning: "eventually = শেষ পর্যন্ত | actually = আসলে | career = পেশাজীবন | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 91,
        question: "Do you spend much time with your family?",
        b75: "Not as much as I used to, since moving to Dhaka has really cut into that time. But whenever I do go back home, I make a real effort to spend quality time with them, rather than just being physically there.",
        b85: "Not as much as I used to, honestly, since moving to Dhaka has really cut into that time. But whenever I do go back home, I make a real effort to spend quality time with them, rather than just being physically there.",
        b9: "Not as much as I used to, honestly, since moving to Dhaka has really cut into that time. But whenever I do go back home, I make a real effort to spend quality time with them, rather than just being physically there.",
        meaning: "honestly = সত্যি বলতে"
    },
    {
        id: 92,
        question: "Who are you closest to in your family?",
        b75: "I'd say I'm closest to my parents, we talk regularly, and they've always been really supportive of my studies and future plans, even now that I'm away in Dhaka.",
        b85: "I'd say I'm closest to my parents, honestly, we talk regularly, and they've always been really supportive of my studies and future plans, even now that I'm away in Dhaka.",
        b9: "I'd say I'm closest to my parents, honestly, we talk regularly, and they've always been really supportive of my studies and future plans, even now that I'm away in Dhaka.",
        meaning: "regularly = নিয়মিত | honestly = সত্যি বলতে | support = সহায়তা"
    },
    {
        id: 93,
        question: "Do you prefer spending time with your family or friends?",
        b75: "That's a tough one, since both matter to me in different ways. Family gives me a sense of comfort and stability, while friends offer more of an easy-going, relaxed kind of connection, so I don't think I could really choose one over the other.",
        b85: "That's a tough one, honestly, since both matter to me in different ways. Family gives me a sense of comfort and stability, while friends offer more of an easy-going, relaxed kind of connection, so I don't think I could really choose one over the other.",
        b9: "That's a tough one, honestly, since both matter to me in different ways. Family gives me a sense of comfort and stability, while friends offer more of an easy-going, relaxed kind of connection, so I don't think I could really choose one over the other.",
        meaning: "honestly = সত্যি বলতে | relaxed = স্বস্তিদায়ক | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 94,
        question: "Who is your best friend?",
        b75: "My best friend is Aryan, we've known each other since we were kids and grew up in the same neighborhood, so we go back a long way.",
        b85: "My best friend is Aryan, we've known each other since we were kids and grew up in the same neighborhood, so we go back a long way.",
        b9: "My best friend is Aryan, we've known each other since we were kids and grew up in the same neighborhood, so we go back a long way.",
        meaning: "neighborhood = পাড়া / মহল্লা"
    },
    {
        id: 95,
        question: "Are you still friends with people from your childhood?",
        b75: "Yes, a few, definitely, Aryan especially, since he's still my closest friend. There are a couple of others too, though we've drifted apart a bit as everyone's gotten busier with their own lives and studies.",
        b85: "Yes, a few, definitely, Aryan especially, since he's still my closest friend. There are a couple of others too, though we've drifted apart a bit as everyone's gotten busier with their own lives and studies.",
        b9: "Yes, a few, definitely, Aryan especially, since he's still my closest friend. There are a couple of others too, though we've drifted apart a bit as everyone's gotten busier with their own lives and studies.",
        meaning: "especially = বিশেষ করে"
    },
    {
        id: 96,
        question: "Is family important in your country?",
        b75: "Yes, extremely important, actually. In Bangladesh, family tends to be at the centre of most people's lives, decisions are often made collectively, and there's a strong expectation to support and stay close to your parents, even as an adult.",
        b85: "Yes, extremely important, actually. In Bangladesh, family tends to be at the centre of most people's lives, decisions are often made collectively, and there's a strong expectation to support and stay close to your parents, even as an adult.",
        b9: "Yes, extremely essential, actually. In Bangladesh, family tends to be at the centre of most people's lives, decisions are often made collectively, and there's a strong expectation to support and stay close to your parents, even as an adult.",
        meaning: "decision = সিদ্ধান্ত | actually = আসলে | support = সহায়তা"
    },
    {
        id: 97,
        question: "Do you like flowers?",
        b75: "Yes, definitely, I really like flowers, actually. Gardening is one of my main hobbies, so growing and taking care of flowers is something I genuinely enjoy, not just appreciating them from a distance.",
        b85: "Yes, definitely, I really like flowers, actually. Gardening is one of my main hobbies, so growing and taking care of flowers is something I genuinely enjoy, not just appreciating them from a distance.",
        b9: "Yes, definitely, I really like flowers, actually. Gardening is one of my main hobbies, so growing and taking care of flowers is something I genuinely enjoy, not just appreciating them from a distance.",
        meaning: "gardening = বাগান করা | actually = আসলে"
    },
    {
        id: 98,
        question: "What's your favourite flower?",
        b75: "My favourite flower is Bokul, definitely. I really love its soft, gentle fragrance, and there's something about its simple, understated beauty that I find more appealing than flashier, more colourful flowers.",
        b85: "My favourite flower is Bokul, definitely. I really love its soft, gentle fragrance, and there's something about its simple, understated beauty that I find more appealing than flashier, more colourful flowers.",
        b9: "My favourite flower is Bokul, definitely. I really love its soft, gentle fragrance, and there's something about its simple, understated beauty that I find more appealing than flashier, more colourful flowers.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 99,
        question: "When was the last time you gave someone flowers?",
        b75: "To be honest, I can't quite remember an exact time, giving flowers isn't something I do that regularly. I might have shared some flowers I grew myself with a family member or neighbor at some point, though.",
        b85: "To be honest, I can't quite remember an exact time, giving flowers isn't something I do that regularly. I might have shared some flowers I grew myself with a family member or neighbor at some point, though.",
        b9: "To be honest, I can't quite remember an exact time, giving flowers isn't something I do that regularly. I might have shared some flowers I grew myself with a family member or neighbor at some point, though.",
        meaning: "regularly = নিয়মিত"
    },
    {
        id: 100,
        question: "Do any flowers have a special meaning in your country?",
        b75: "Yes, definitely, the water lily, or Shapla, is actually our national flower and holds real cultural significance, it even appears on national symbols. Other flowers, like marigolds, are also commonly used in festivals and religious occasions.",
        b85: "Yes, definitely, the water lily, or Shapla, is actually our national flower and holds real cultural significance, it even appears on national symbols. Other flowers, like marigolds, are also commonly used in festivals and religious occasions.",
        b9: "Yes, definitely, the water lily, or Shapla, is actually our national flower and holds real cultural significance, it even appears on national symbols. Other flowers, like marigolds, are also commonly used in festivals and religious occasions.",
        meaning: "religious = ধর্মীয় | occasion = অনুষ্ঠান / উপলক্ষ | actually = আসলে"
    },
    {
        id: 101,
        question: "Why do you think women like flowers more than men?",
        b75: "Honestly, I'm not sure I'd fully agree with that assumption, it might just be more of a social perception than a real difference. If there's a pattern, though, it's probably more about how society traditionally associates flowers with femininity, rather than any real difference in appreciation.",
        b85: "Honestly, I'm not sure I'd fully agree with that assumption, it might just be more of a social perception than a real difference. If there's a pattern, though, it's probably more about how society traditionally associates flowers with femininity, rather than any real difference in appreciation.",
        b9: "Honestly, I'm not sure I'd fully agree with that assumption, it might just be more of a social perception than a real difference. If there's a pattern, though, it's probably more about how society traditionally associates flowers with femininity, rather than any real difference in appreciation.",
        meaning: "traditional = ঐতিহ্যবাহী | honestly = সত্যি বলতে | society = সমাজ"
    },
    {
        id: 102,
        question: "What's your favourite food?",
        b75: "I'd say seafood is probably my favourite, fish and shrimp especially, since they're such a big part of local Bangladeshi cooking. I'm also a big fan of pitha, especially in winter, when families usually make it fresh at home.",
        b85: "I'd say seafood is probably my favourite, fish and shrimp especially, since they're such a big part of local Bangladeshi cooking. I'm also a big fan of pitha, especially in winter, when families usually make it fresh at home.",
        b9: "I'd say seafood is probably my favourite, fish and shrimp especially, since they're such a big part of local Bangladeshi cooking. I'm also a big fan of pitha, especially in winter, when families generally make it fresh at home.",
        meaning: "especially = বিশেষ করে | usually = সাধারণত | local = স্থানীয়"
    },
    {
        id: 103,
        question: "Have you always liked the same food?",
        b75: "Not entirely, no, my taste has definitely shifted a bit over the years. As a kid, I was a lot pickier, especially with vegetables, but now I actually enjoy a much wider range of food than I used to.",
        b85: "Not entirely, no, my taste has definitely shifted a bit over the years. As a kid, I was a lot pickier, especially with vegetables, but now I actually enjoy a much wider range of food than I used to.",
        b9: "Not entirely, no, my taste has definitely shifted a bit over the years. As a kid, I was a lot pickier, especially with vegetables, but now I actually enjoy a much wider range of food than I used to.",
        meaning: "especially = বিশেষ করে | actually = আসলে"
    },
    {
        id: 104,
        question: "Is there any food you dislike?",
        b75: "I'm not really a fan of very oily or overly heavy fast food, to be honest. I much prefer fresh, homemade meals, they just feel healthier and more satisfying to me.",
        b85: "I'm not really a fan of very oily or overly heavy fast food, to be honest. I much prefer fresh, homemade meals, they just feel healthier and more satisfying to me.",
        b9: "I'm not really a fan of very oily or overly heavy fast food, to be honest. I much prefer fresh, homemade meals, they just feel healthier and more satisfying to me.",
        meaning: "prefer = বেশি পছন্দ করা"
    },
    {
        id: 105,
        question: "What is a common meal in your country?",
        b75: "A very typical meal here would be rice with fish curry, alongside some vegetables and dal, or lentils. It's a fairly standard combination that most families eat regularly, especially for lunch or dinner.",
        b85: "A very typical meal here would be rice with fish curry, alongside some vegetables and dal, or lentils. It's a fairly standard combination that most families eat regularly, especially for lunch or dinner.",
        b9: "A very typical meal here would be rice with fish curry, alongside some vegetables and dal, or lentils. It's a fairly standard combination that most families eat regularly, especially for lunch or dinner.",
        meaning: "especially = বিশেষ করে | regularly = নিয়মিত"
    },
    {
        id: 106,
        question: "Do you have a healthy diet?",
        b75: "I'd say it's reasonably healthy overall. I eat quite a lot of fish, vegetables, and fruits, though I do allow myself the occasional treat, like pitha, which isn't the healthiest but is definitely worth it.",
        b85: "I'd say it's reasonably healthy overall. I eat quite a lot of fish, vegetables, and fruits, though I do allow myself the occasional treat, like pitha, which isn't the healthiest but is definitely worth it.",
        b9: "I'd say it's reasonably healthy overall. I eat quite a lot of fish, vegetables, and fruits, though I do allow myself the occasional treat, like pitha, which isn't the healthiest but is definitely worth it.",
        meaning: "occasion = অনুষ্ঠান / উপলক্ষ"
    },
    {
        id: 107,
        question: "What do you think of fast food?",
        b75: "I'm not really a big fan, to be honest. It's convenient, sure, and fine occasionally, but I don't think it's especially healthy, so I'd much rather go for homemade food most of the time.",
        b85: "I'm not really a big fan, to be honest. It's convenient, sure, and fine occasionally, but I don't think it's especially healthy, so I'd much rather go for homemade food most of the time.",
        b9: "I'm not really a big fan, to be honest. It's convenient, sure, and fine occasionally, but I don't think it's especially healthy, so I'd much rather go for homemade food most of the time.",
        meaning: "occasionally = মাঝেমধ্যে | convenient = সুবিধাজনক | especially = বিশেষ করে | occasion = অনুষ্ঠান / উপলক্ষ"
    },
    {
        id: 108,
        question: "Do you often go out in the evenings?",
        b75: "Not that often, most evenings I'm studying or just relaxing at home. That said, I'll occasionally go out, maybe grab food with friends or just take a walk to clear my head.",
        b85: "Not that often, to be honest, most evenings I'm studying or just relaxing at home. That said, I'll occasionally go out, maybe grab food with friends or just take a walk to clear my head.",
        b9: "Not that often, to be honest, most evenings I'm studying or just relaxing at home. That said, I'll occasionally go out, maybe grab food with friends or just take a walk to clear my head.",
        meaning: "occasionally = মাঝেমধ্যে | occasion = অনুষ্ঠান / উপলক্ষ | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 109,
        question: "What do you like to do when you go out?",
        b75: "I usually like grabbing food somewhere, or just walking around and chatting with friends. Sometimes, if there's a big football match on, especially involving Argentina, I'll head out to watch it somewhere with a good atmosphere.",
        b85: "I usually like grabbing food somewhere, or just walking around and chatting with friends. Sometimes, if there's a big football match on, especially involving Argentina, I'll head out to watch it somewhere with a good atmosphere.",
        b9: "I generally like grabbing food somewhere, or just walking around and chatting with friends. Sometimes, if there's a big football match on, especially involving Argentina, I'll head out to watch it somewhere with a good atmosphere.",
        meaning: "atmosphere = পরিবেশ / আবহ | especially = বিশেষ করে | usually = সাধারণত"
    },
    {
        id: 110,
        question: "Do you prefer going out alone or with friends?",
        b75: "Mostly with friends, I'd say, it's just more enjoyable, being able to talk and share the experience makes it feel more worthwhile. That said, I don't mind going out alone occasionally, sometimes it's nice to just think and relax by myself.",
        b85: "Mostly with friends, I'd say, it's just more enjoyable, being able to talk and share the experience makes it feel more worthwhile. That said, I don't mind going out alone occasionally, sometimes it's nice to just think and relax by myself.",
        b9: "Mostly with friends, I'd say, it's just more enjoyable, being able to talk and share the experience makes it feel more worthwhile. That said, I don't mind going out alone occasionally, on some occasions it's nice to just think and relax by myself.",
        meaning: "occasionally = মাঝেমধ্যে | experience = অভিজ্ঞতা | occasion = অনুষ্ঠান / উপলক্ষ | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 111,
        question: "How often do you go out on weekends?",
        b75: "It really varies week to week, maybe once or twice on a typical weekend. If I've had a especially busy week with studies, though, I might just prefer to stay in and rest instead.",
        b85: "It really varies week to week, honestly, maybe once or twice on a typical weekend. If I've had a especially busy week with studies, though, I might just prefer to stay in and rest instead.",
        b9: "It really varies week to week, honestly, maybe once or twice on a typical weekend. If I've had a especially busy week with studies, though, I might just prefer to stay in and rest instead.",
        meaning: "especially = বিশেষ করে | honestly = সত্যি বলতে | prefer = বেশি পছন্দ করা"
    },
    {
        id: 112,
        question: "Do you think it's important for people to go out?",
        b75: "Yes, definitely, I think it's genuinely important. It gives people a chance to socialize and relax outside of their usual routine, which I think has a real positive impact on well-being.",
        b85: "Yes, definitely, I think it's genuinely important. It gives people a chance to socialize and relax outside of their usual routine, which I think has a real positive impact on mental well-being.",
        b9: "Yes, definitely, I believe it's genuinely essential. It gives people a chance to socialize and relax outside of their usual routine, which I believe has a real positive impact on mental emotional well-being.",
        meaning: "well-being = সুস্থতা ও ভালো থাকা | routine = দৈনন্দিন রুটিন | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 113,
        question: "What makes you happy?",
        b75: "A few things, really, spending quality time with family, gardening, watching my plants grow and bloom, and also making progress toward my goals, like doing well in my studies.",
        b85: "A few things, really, spending quality time with family, gardening, watching my plants grow and bloom, and also making progress toward my goals, like doing well in my studies.",
        b9: "A few things, really, spending quality time with family, gardening, watching my plants grow and bloom, and also making progress toward my goals, like doing well in my studies.",
        meaning: "gardening = বাগান করা | goal = লক্ষ্য"
    },
    {
        id: 114,
        question: "What do you do to stay happy?",
        b75: "I try to make time for things I enjoy, gardening especially, and staying connected with family and friends, even when I'm busy. I also try to keep a positive mindset about my studies and future, rather than getting too stressed.",
        b85: "I try to make time for things I enjoy, gardening especially, and staying connected with family and friends, even when I'm busy. I also try to keep a positive mindset about my studies and future, rather than getting too stressed.",
        b9: "I try to make time for things I enjoy, gardening especially, and staying connected with family and friends, even when I'm busy. I also try to keep a positive mindset about my studies and future, rather than getting too stressed.",
        meaning: "especially = বিশেষ করে | gardening = বাগান করা"
    },
    {
        id: 115,
        question: "Does your happiness change with time?",
        b75: "Yes, definitely, I think it evolves quite naturally. As a child, simple things like playing outside made me happy, but now it's more about things like personal growth, achievements, and meaningful relationships.",
        b85: "Yes, definitely, I think it evolves quite naturally. As a child, simple things like playing outside made me happy, but now it's more about things like personal growth, achievements, and meaningful relationships.",
        b9: "Yes, definitely, I believe it evolves quite naturally. As a child, simple things like playing outside made me happy, but now it's more about things like personal growth, achievements, and meaningful relationships.",
        meaning: "meaningful = অর্থবহ | natural = প্রাকৃতিক"
    },
    {
        id: 116,
        question: "What was the happiest moment in your life?",
        b75: "Probably when I got admitted to Dhaka College, it felt like a real achievement after finishing HSC, and seeing how proud my family was made it even more meaningful.",
        b85: "Probably when I got admitted to Dhaka College, honestly, it felt like a real achievement after finishing HSC, and seeing how proud my family was made it even more meaningful.",
        b9: "Probably when I got admitted to Dhaka College, honestly, it felt like a real achievement after finishing HSC, and seeing how proud my family was made it even more meaningful.",
        meaning: "meaningful = অর্থবহ | honestly = সত্যি বলতে"
    },
    {
        id: 117,
        question: "Do you think money brings happiness?",
        b75: "I think money helps to a certain extent, it definitely reduces stress and gives you more options, but I don't think it's the main source of happiness. Things like family, relationships, and personal fulfillment probably matter more in the long run.",
        b85: "I think money helps to a certain extent, it definitely reduces stress and gives you more options, but I don't think it's the main source of happiness. Things like family, relationships, and personal fulfillment probably matter more in the long run.",
        b9: "I believe money helps to a certain extent, it definitely reduces stress and gives you more options, but I don't think it's the main source of happiness. Things like family, relationships, and personal fulfillment probably matter more in the long run.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 118,
        question: "Do you have a hobby?",
        b75: "Yes, definitely, gardening is my main hobby, I really enjoy growing flowers and fruit trees. I'm also quite interested in animals and birds, I keep a few pet birds too.",
        b85: "Yes, definitely, gardening is my main hobby, I really enjoy growing flowers and fruit trees. I'm also quite interested in animals and birds, I keep a few pet birds too.",
        b9: "Yes, definitely, gardening is my main hobby, I really enjoy growing flowers and fruit trees. I'm also quite interested in animals and birds, I keep a few pet birds too.",
        meaning: "gardening = বাগান করা"
    },
    {
        id: 119,
        question: "What equipment do you need for it?",
        b75: "For gardening, the basics are enough really, a spade, a watering can, some good soil, and seeds or saplings. It's not especially expensive equipment, which is one of the things I like about it.",
        b85: "For gardening, the basics are enough really, a spade, a watering can, some good soil, and seeds or saplings. It's not especially expensive equipment, which is one of the things I like about it.",
        b9: "For gardening, the basics are enough really, a spade, a watering can, some good soil, and seeds or saplings. It's not especially expensive equipment, which is one of the things I like about it.",
        meaning: "especially = বিশেষ করে | gardening = বাগান করা"
    },
    {
        id: 120,
        question: "Do you think hobbies should be shared with other people?",
        b75: "I think it depends, honestly. Some hobbies, like gardening, can be quite enjoyable done alone, it's almost meditative in a way. But sharing a hobby with others, like watching football with friends, definitely adds a different kind of enjoyment, more social and lively.",
        b85: "I think it depends, honestly. Some hobbies, like gardening, can be quite enjoyable done alone, it's almost meditative in a way. But sharing a hobby with others, like watching football with friends, definitely adds a different kind of enjoyment, more social and lively.",
        b9: "I believe it depends, honestly. Some hobbies, like gardening, can be quite enjoyable done alone, it's almost meditative in a way. But sharing a hobby with others, like watching football with friends, definitely adds a different kind of enjoyment, more social and lively.",
        meaning: "gardening = বাগান করা | honestly = সত্যি বলতে"
    },
    {
        id: 121,
        question: "Did you have a hobby as a child?",
        b75: "Yes, I think gardening started quite early for me, helping my parents out in the garden as a kid. I also really enjoyed being around animals, we had pets at home even back then.",
        b85: "Yes, actually, I think gardening started quite early for me, helping my parents out in the garden as a kid. I also really enjoyed being around animals, we had pets at home even back then.",
        b9: "Yes, actually, I believe gardening started quite early for me, helping my parents out in the garden as a kid. I also really enjoyed being around animals, we had pets at home even back then.",
        meaning: "gardening = বাগান করা | actually = আসলে"
    },
    {
        id: 122,
        question: "What hobbies are popular in your country?",
        b75: "Cricket and football are probably the most popular, especially among younger people, they're followed passionately here. In villages and smaller towns, things like gardening and fishing are also pretty common pastimes.",
        b85: "Cricket and football are probably the most popular, especially among younger people, they're followed passionately here. In villages and smaller towns, things like gardening and fishing are also pretty common pastimes.",
        b9: "Cricket and football are probably the most popular, especially among younger people, they're followed passionately here. In villages and smaller towns, things like gardening and fishing are also pretty common pastimes.",
        meaning: "especially = বিশেষ করে | gardening = বাগান করা"
    },
    {
        id: 123,
        question: "Why do you think people have hobbies?",
        b75: "I think hobbies mainly give people a way to relax and recharge outside of work or studies. They also give a sense of purpose or achievement in something that isn't tied to academic or career pressure.",
        b85: "I think hobbies mainly give people a way to relax and recharge outside of work or studies. They also give a sense of purpose or achievement in something that isn't tied to academic or career pressure.",
        b9: "I believe hobbies mainly give people a way to relax and recharge outside of work or studies. They also give a sense of purpose or achievement in something that isn't tied to academic or career pressure.",
        meaning: "academic = শিক্ষাসংক্রান্ত | pressure = চাপ | career = পেশাজীবন | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 124,
        question: "How often do you go online?",
        b75: "Pretty much every day, it's hard to avoid it these days. Mostly for studying and research, but also for keeping in touch with family and following the news.",
        b85: "Pretty much every day, honestly, it's hard to avoid it these days. Mostly for studying and research, but also for keeping in touch with family and following the news.",
        b9: "Pretty much every day, honestly, it's hard to avoid it these days. Mostly for studying and research, but also for keeping in touch with family and following the news.",
        meaning: "honestly = সত্যি বলতে | avoid = এড়িয়ে চলা"
    },
    {
        id: 125,
        question: "What do you use the internet for?",
        b75: "Mostly for academic purposes, research, assignments, that kind of thing, and also to keep in touch with family and follow business news.",
        b85: "Mostly for academic purposes, research, assignments, that kind of thing, and also to keep in touch with family and follow business news.",
        b9: "Mostly for academic purposes, research, assignments, that kind of thing, and also to keep in touch with family and follow business news.",
        meaning: "assignment = অ্যাসাইনমেন্ট / কাজ | academic = শিক্ষাসংক্রান্ত"
    },
    {
        id: 126,
        question: "How do you get online?",
        b75: "Mostly wifi when I'm at home or college, or mobile data otherwise, whichever's more convenient. Phone for quick things, laptop for anything more serious.",
        b85: "Mostly wifi when I'm at home or college, or mobile data otherwise, whichever's more convenient. Phone for quick things, laptop for anything more serious.",
        b9: "Mostly wifi when I'm at home or college, or mobile data otherwise, whichever's more convenient. Phone for quick things, laptop for anything more serious.",
        meaning: "convenient = সুবিধাজনক"
    },
    {
        id: 127,
        question: "Do you have your own computer?",
        b75: "Yes, I do, I have my own laptop, which I mostly use for studying, assignments, and research, it's pretty essential for university life at this point.",
        b85: "Yes, I do, I have my own laptop, which I mostly use for studying, assignments, and research, it's pretty essential for university life at this point.",
        b9: "Yes, I do, I have my own laptop, which I mostly use for studying, assignments, and research, it's pretty essential for university life at this point.",
        meaning: "assignment = অ্যাসাইনমেন্ট / কাজ"
    },
    {
        id: 128,
        question: "What's your favourite website?",
        b75: "I don't think I have just one favourite, but I use YouTube a lot, mostly for educational content and research, it's pretty useful for that.",
        b85: "I don't think I have just one favourite, honestly, but I use YouTube a lot, mostly for educational content and research, it's pretty useful for that.",
        b9: "I don't think I have just one favourite, honestly, but I use YouTube a lot, mostly for educational content and research, it's pretty useful for that.",
        meaning: "honestly = সত্যি বলতে"
    },
    {
        id: 129,
        question: "Do you think children should be allowed unsupervised access to the internet?",
        b75: "No, I don't think so, honestly. There's a lot of content online that isn't appropriate for children, so some level of supervision or parental control seems necessary, at least until they're a bit older.",
        b85: "No, I don't think so, honestly. There's a lot of content online that isn't appropriate for children, so some level of supervision or parental control seems necessary, at least until they're a bit older.",
        b9: "No, I don't think so, honestly. There's a lot of content online that isn't appropriate for children, so some level of supervision or parental control seems necessary, at least until they're a bit older.",
        meaning: "honestly = সত্যি বলতে"
    },
    {
        id: 130,
        question: "What do you usually do in your leisure time?",
        b75: "In my leisure time, I usually go for gardening if I'm home, or I'll watch football, listen to educational podcasts, or just relax with friends, depending on the day.",
        b85: "In my leisure time, I usually go for gardening if I'm home, or I'll watch football, listen to educational podcasts, or just relax with friends, depending on the day.",
        b9: "In my leisure time, I generally go for gardening if I'm home, or I'll watch football, listen to educational podcasts, or just relax with friends, depending on the day.",
        meaning: "gardening = বাগান করা | usually = সাধারণত | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 131,
        question: "Do you prefer to spend your free time alone or with others?",
        b75: "Honestly, it depends on my mood and what I'm doing. Gardening, for example, I generally prefer alone, it's quite peaceful. But for things like watching football, I definitely prefer company, it's more fun with others.",
        b85: "Honestly, it depends on my mood and what I'm doing. Gardening, for example, I generally prefer alone, it's quite peaceful. But for things like watching football, I definitely prefer company, it's more fun with others.",
        b9: "Honestly, it depends on my mood and what I'm doing. Gardening, for example, I generally prefer alone, it's quite peaceful. But for things like watching football, I definitely prefer company, it's more fun with others.",
        meaning: "generally = সাধারণভাবে | gardening = বাগান করা | peaceful = শান্তিপূর্ণ | honestly = সত্যি বলতে | prefer = বেশি পছন্দ করা"
    },
    {
        id: 132,
        question: "What did you enjoy doing in your free time when you were a child?",
        b75: "As a child, I really enjoyed being outdoors, playing with friends, helping in the garden, and spending time with our pets. It was a pretty simple, happy time overall.",
        b85: "As a child, I really enjoyed being outdoors, playing with friends, helping in the garden, and spending time with our pets. It was a pretty simple, happy time overall.",
        b9: "As a child, I really enjoyed being outdoors, playing with friends, helping in the garden, and spending time with our pets. It was a pretty simple, happy time overall.",
        meaning: "outdoor = বাইরের"
    },
    {
        id: 133,
        question: "Do you have enough leisure time now?",
        b75: "Not really, no, not as much as I'd like, university keeps me pretty busy. I do try to make time for gardening or football when I can, but it's definitely less than before.",
        b85: "Not really, no, not as much as I'd like, university keeps me pretty busy. I do try to make time for gardening or football when I can, but it's definitely less than before.",
        b9: "Not really, no, not as much as I'd like, university keeps me pretty busy. I do try to make time for gardening or football when I can, but it's definitely less than before.",
        meaning: "gardening = বাগান করা"
    },
    {
        id: 134,
        question: "Do you think it is the best way to spend leisure time?",
        b75: "I think the best way is doing something you genuinely enjoy and that actually helps you recharge, rather than something that feels like just another task or obligation. It should feel refreshing, not draining.",
        b85: "I think the best way is doing something you genuinely enjoy and that actually helps you recharge, rather than something that feels like just another task or obligation. It should feel refreshing, not draining.",
        b9: "I believe the best way is doing something you genuinely enjoy and that actually helps you recharge, rather than something that feels like just another task or obligation. It should feel refreshing, not draining.",
        meaning: "actually = আসলে"
    },
    {
        id: 135,
        question: "Do you like music?",
        b75: "Yes, I do, though my taste is probably a bit different from most people my age. I mostly listen to Islamic music and ghazals rather than mainstream pop or anything like that.",
        b85: "Yes, I do, though my taste is probably a bit different from most people my age. I mostly listen to Islamic music and ghazals rather than mainstream pop or anything like that.",
        b9: "Yes, I do, though my taste is probably a bit different from most people my age. I mostly listen to Islamic music and ghazals rather than mainstream pop or anything like that.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 136,
        question: "What's your favourite type of music?",
        b75: "Ghazals and Islamic music, definitely, they're the types I go back to the most. I find them a lot more peaceful and meaningful compared to louder, more upbeat genres.",
        b85: "Ghazals and Islamic music, definitely, they're the types I go back to the most. I find them a lot more peaceful and meaningful compared to louder, more upbeat genres.",
        b9: "Ghazals and Islamic music, definitely, they're the types I go back to the most. I find them a lot more peaceful and meaningful compared to louder, more upbeat genres.",
        meaning: "meaningful = অর্থবহ | peaceful = শান্তিপূর্ণ | compared = তুলনা করলে"
    },
    {
        id: 137,
        question: "Can you sing?",
        b75: "Not really, singing has never been one of my strengths. I much prefer listening to music rather than performing it myself.",
        b85: "Not really, honestly, singing has never been one of my strengths. I much prefer listening to music rather than performing it myself.",
        b9: "Not really, honestly, singing has never been one of my strengths. I much prefer listening to music rather than performing it myself.",
        meaning: "honestly = সত্যি বলতে | prefer = বেশি পছন্দ করা"
    },
    {
        id: 138,
        question: "Did you learn music at school when you were a child?",
        b75: "We did have some basic music classes as part of school, though I wasn't especially drawn to them at the time, my interests were more focused elsewhere, gardening and sports mostly.",
        b85: "We did have some basic music classes as part of school, though I wasn't especially drawn to them at the time, my interests were more focused elsewhere, gardening and sports mostly.",
        b9: "We did have some basic music classes as part of school, though I wasn't especially drawn to them at the time, my interests were more focused elsewhere, gardening and sports mostly.",
        meaning: "especially = বিশেষ করে | gardening = বাগান করা | focus = মনোযোগ দেওয়া"
    },
    {
        id: 139,
        question: "If you could learn a musical instrument, what would it be?",
        b75: "Probably the harmonium, since it's commonly used in ghazals and Islamic devotional music, which is the kind of music I'm drawn to most.",
        b85: "Probably the harmonium, actually, since it's commonly used in ghazals and Islamic devotional music, which is the kind of music I'm drawn to most.",
        b9: "Probably the harmonium, actually, since it's commonly used in ghazals and Islamic devotional music, which is the kind of music I'm drawn to most.",
        meaning: "actually = আসলে"
    },
    {
        id: 140,
        question: "Do you think music is important?",
        b75: "Yes, definitely, I think music plays an important role for a lot of people, it helps with relaxation, emotional expression, and even connecting with others culturally or spiritually.",
        b85: "Yes, definitely, I think music plays an important role for a lot of people, it helps with relaxation, emotional expression, and even connecting with others culturally or spiritually.",
        b9: "Yes, definitely, I believe music plays an essential role for a lot of people, it helps with relaxation, emotional expression, and even connecting with others culturally or spiritually.",
        meaning: "emotional = আবেগগত | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 141,
        question: "Do you like your neighbours?",
        b75: "Yes, definitely, back home in Noakhali, our neighbors are friendly and genuinely helpful, we've known each other for years, so there's a real sense of familiarity and trust.",
        b85: "Yes, definitely, back home in Noakhali, our neighbors are friendly and genuinely helpful, we've known each other for years, so there's a real sense of familiarity and trust.",
        b9: "Yes, definitely, back home in Noakhali, our neighbors are friendly and genuinely helpful, we've known each other for years, so there's a real sense of familiarity and trust.",
        meaning: "friendly = বন্ধুসুলভ"
    },
    {
        id: 142,
        question: "Are neighbours usually close to each other in your country?",
        b75: "In villages and smaller towns, definitely, neighbors tend to be quite close, almost like extended family in some cases. In big cities like Dhaka, though, people are generally busier and more private, so that closeness isn't as common.",
        b85: "In villages and smaller towns, definitely, neighbors tend to be quite close, almost like extended family in some cases. In big cities like Dhaka, though, people are generally busier and more private, so that closeness isn't as common.",
        b9: "In villages and smaller towns, definitely, neighbors tend to be quite close, almost like extended family in some cases. In big cities like Dhaka, though, people are generally busier and more private, so that closeness isn't as common.",
        meaning: "generally = সাধারণভাবে | private = ব্যক্তিগত"
    },
    {
        id: 143,
        question: "What is your neighbourhood like?",
        b75: "Back home in Noakhali, it's quiet and close, everyone knows everyone. My area in Dhaka is a lot busier, though still fine to live in.",
        b85: "Back home in Noakhali, it's quiet and close, everyone knows everyone. My area in Dhaka is a lot busier, though still fine to live in.",
        b9: "Back home in Noakhali, it's quiet and close, everyone knows everyone. My area in Dhaka is a lot busier, though still fine to live in.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 144,
        question: "Do you think your neighbourhood is a good place for children?",
        b75: "Yes, definitely, back home at least, the neighbors are friendly and genuinely look out for each other's children, which adds an extra layer of safety beyond just the family itself.",
        b85: "Yes, definitely, back home at least, the neighbors are friendly and genuinely look out for each other's children, which adds an extra layer of safety beyond just the family itself.",
        b9: "Yes, definitely, back home at least, the neighbors are friendly and genuinely look out for each other's children, which adds an extra layer of safety beyond just the family itself.",
        meaning: "friendly = বন্ধুসুলভ | safety = নিরাপত্তা | safe = নিরাপদ"
    },
    {
        id: 145,
        question: "How could your neighbourhood be improved?",
        b75: "In Dhaka, I think traffic and overcrowding are the biggest issues, honestly. More green spaces or small parks would also make a real difference, especially for someone like me who misses having outdoor space.",
        b85: "In Dhaka, I think traffic and overcrowding are the biggest issues, honestly. More green spaces or small parks would also make a real difference, especially for someone like me who misses having outdoor space.",
        b9: "In Dhaka, I believe traffic and overcrowding are the biggest issues, honestly. More green spaces or small parks would also make a real difference, especially for someone like me who misses having outdoor space.",
        meaning: "especially = বিশেষ করে | honestly = সত্যি বলতে | outdoor = বাইরের"
    },
    {
        id: 146,
        question: "Do you think it is important to have a good relationship with your neighbours?",
        b75: "Yes, definitely, I think it's genuinely important. Good relationships with neighbors provide a kind of everyday support, help in emergencies, small favours, and it also just makes daily life feel more pleasant and less isolating.",
        b85: "Yes, definitely, I think it's genuinely important. Good relationships with neighbors provide a kind of everyday support, help in emergencies, small favours, and it also just makes daily life feel more pleasant and less isolating.",
        b9: "Yes, definitely, I believe it's genuinely essential. Good relationships with neighbors provide a kind of everyday support, help in emergencies, small favours, and it also just makes daily life feel more pleasant and less isolating.",
        meaning: "pleasant = মনোরম | support = সহায়তা"
    },
    {
        id: 147,
        question: "Do you live in a noisy area?",
        b75: "In Dhaka, yes, definitely, traffic noise especially is pretty constant. Back home in Noakhali, though, it's a completely different story, much quieter and calmer overall.",
        b85: "In Dhaka, yes, definitely, traffic noise especially is pretty constant. Back home in Noakhali, though, it's a completely different story, much quieter and calmer overall.",
        b9: "In Dhaka, yes, definitely, traffic noise especially is pretty constant. Back home in Noakhali, though, it's a completely different story, much quieter and calmer overall.",
        meaning: "especially = বিশেষ করে"
    },
    {
        id: 148,
        question: "What kinds of sounds do you hear on a daily basis?",
        b75: "In Dhaka, it's mostly traffic noise, horns, engines, people talking on the street. Back home in Noakhali, it's much calmer, mostly birds chirping and the call to prayer a few times a day.",
        b85: "In Dhaka, it's mostly traffic noise, horns, engines, people talking on the street. Back home in Noakhali, it's much calmer, mostly birds chirping and the call to prayer a few times a day.",
        b9: "In Dhaka, it's mostly traffic noise, horns, engines, people talking on the street. Back home in Noakhali, it's much calmer, mostly birds chirping and the call to prayer a few times a day.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 149,
        question: "Where do you go to spend time in peace and quiet?",
        b75: "Back home, my garden is definitely my go-to spot for peace and quiet. In Dhaka, it's a lot harder to find that same kind of calm, so I'll usually just stay in my room or find a quiet corner in the library.",
        b85: "Back home, my garden is definitely my go-to spot for peace and quiet. In Dhaka, it's a lot harder to find that same kind of calm, so I'll usually just stay in my room or find a quiet corner in the library.",
        b9: "Back home, my garden is definitely my go-to spot for peace and quiet. In Dhaka, it's a lot harder to find that same kind of calm, so I'll generally just stay in my room or find a quiet corner in the library.",
        meaning: "usually = সাধারণত"
    },
    {
        id: 150,
        question: "Are there any sounds which you think are pleasant?",
        b75: "Yes, definitely, birds singing in the morning is one, especially since I keep pet birds myself. The call to prayer is another, it has a calming, almost peaceful quality to it that I really value.",
        b85: "Yes, definitely, birds singing in the morning is one, especially since I keep pet birds myself. The call to prayer is another, it has a calming, almost peaceful quality to it that I really value.",
        b9: "Yes, definitely, birds singing in the morning is one, especially since I keep pet birds myself. The call to prayer is another, it has a calming, almost peaceful quality to it that I really value.",
        meaning: "especially = বিশেষ করে | peaceful = শান্তিপূর্ণ"
    },
    {
        id: 151,
        question: "Do you have any noisy friends?",
        b75: "Yes, a couple, some friends are naturally loud and talkative, especially when we're all together in a group. It's more entertaining than annoying, though, it definitely livens things up.",
        b85: "Yes, a couple, honestly, some friends are naturally loud and talkative, especially when we're all together in a group. It's more entertaining than annoying, though, it definitely livens things up.",
        b9: "Yes, a couple, honestly, some friends are naturally loud and talkative, especially when we're all together in a group. It's more entertaining than annoying, though, it definitely livens things up.",
        meaning: "especially = বিশেষ করে | honestly = সত্যি বলতে | natural = প্রাকৃতিক"
    },
    {
        id: 152,
        question: "Do you have a pet?",
        b75: "Yes, I keep a few pet birds at home right now. I've had dogs and cats in the past too, so animals have always been a part of my life in some way.",
        b85: "Yes, actually, I keep a few pet birds at home right now. I've had dogs and cats in the past too, so animals have always been a part of my life in some way.",
        b9: "Yes, actually, I keep a few pet birds at home right now. I've had dogs and cats in the past too, so animals have always been a part of my life in some way.",
        meaning: "actually = আসলে"
    },
    {
        id: 153,
        question: "Do you like animals?",
        b75: "Yes, definitely, I really like animals, I always have, taking care of pets has just always felt natural to me, ever since I was a kid.",
        b85: "Yes, definitely, I really like animals, I always have, taking care of pets has just always felt natural to me, ever since I was a kid.",
        b9: "Yes, definitely, I really like animals, I always have, taking care of pets has just always felt natural to me, ever since I was a kid.",
        meaning: "natural = প্রাকৃতিক"
    },
    {
        id: 154,
        question: "What's your favourite animal?",
        b75: "Probably birds, since I keep a few myself. I really enjoy their colours, their songs, and just watching them go about their day, it's quite calming actually.",
        b85: "Probably birds, honestly, since I keep a few myself. I really enjoy their colours, their songs, and just watching them go about their day, it's quite calming actually.",
        b9: "Probably birds, honestly, since I keep a few myself. I really enjoy their colours, their songs, and just watching them go about their day, it's quite calming actually.",
        meaning: "honestly = সত্যি বলতে | actually = আসলে"
    },
    {
        id: 155,
        question: "What is a popular pet to have in your country?",
        b75: "Dogs, cats, and birds are probably the most common pets here, honestly. In villages, keeping pigeons is also fairly popular, and some families keep livestock too, though that's more for practical reasons than as a pet exactly.",
        b85: "Dogs, cats, and birds are probably the most common pets here, honestly. In villages, keeping pigeons is also fairly popular, and some families keep livestock too, though that's more for practical reasons than as a pet exactly.",
        b9: "Dogs, cats, and birds are probably the most common pets here, honestly. In villages, keeping pigeons is also fairly popular, and some families keep livestock too, though that's more for practical reasons than as a pet exactly.",
        meaning: "practical = ব্যবহারিক | honestly = সত্যি বলতে"
    },
    {
        id: 156,
        question: "Did you have a pet as a child?",
        b75: "Yes, we did, we had dogs and cats at home throughout my childhood, and I genuinely enjoyed spending time with them, playing, feeding them, that kind of thing.",
        b85: "Yes, we did, we had dogs and cats at home throughout my childhood, and I genuinely enjoyed spending time with them, playing, feeding them, that kind of thing.",
        b9: "Yes, we did, we had dogs and cats at home throughout my childhood, and I genuinely enjoyed spending time with them, playing, feeding them, that kind of thing.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 157,
        question: "Why do people have pets?",
        b75: "I think it's mainly for companionship and comfort, pets can really help reduce stress, and they make people feel less lonely, especially if they live alone or are away from family.",
        b85: "I think it's mainly for companionship and comfort, pets can really help reduce stress, and they make people feel less lonely, especially if they live alone or are away from family.",
        b9: "I believe it's mainly for companionship and comfort, pets can really help reduce stress, and they make people feel less lonely, especially if they live alone or are away from family.",
        meaning: "especially = বিশেষ করে"
    },
    {
        id: 158,
        question: "Do you like shopping?",
        b75: "Not especially, no, shopping isn't something I get excited about. I usually only go when there's a specific need, new clothes, books for college, that kind of thing.",
        b85: "Not especially, no, shopping isn't something I get excited about. I usually only go when there's a specific need, new clothes, books for college, that kind of thing.",
        b9: "Not especially, no, shopping isn't something I get excited about. I generally only go when there's a specific need, new clothes, books for college, that kind of thing.",
        meaning: "especially = বিশেষ করে | usually = সাধারণত"
    },
    {
        id: 159,
        question: "What do you usually buy when you go shopping?",
        b75: "Mostly practical things, clothes when needed, books or stationery for college, and occasionally gardening supplies, like seeds or small tools.",
        b85: "Mostly practical things, honestly, clothes when needed, books or stationery for college, and occasionally gardening supplies, like seeds or small tools.",
        b9: "Mostly practical things, honestly, clothes when needed, books or stationery for college, and occasionally gardening supplies, like seeds or small tools.",
        meaning: "occasionally = মাঝেমধ্যে | practical = ব্যবহারিক | gardening = বাগান করা | occasion = অনুষ্ঠান / উপলক্ষ | honestly = সত্যি বলতে"
    },
    {
        id: 160,
        question: "Do you prefer shopping alone or with others?",
        b75: "I prefer shopping alone, definitely, it's quicker and more efficient. I know exactly what I need, so I don't really need anyone else's opinion or have to wait around for them.",
        b85: "I prefer shopping alone, definitely, it's quicker and more efficient. I know exactly what I need, so I don't really need anyone else's opinion or have to wait around for them.",
        b9: "I prefer shopping alone, definitely, it's quicker and more efficient. I know exactly what I need, so I don't really need anyone else's opinion or have to wait around for them.",
        meaning: "opinion = মতামত | prefer = বেশি পছন্দ করা"
    },
    {
        id: 161,
        question: "Do you enjoy shopping for clothes?",
        b75: "Not really, no, buying clothes is more of a necessity for me than something enjoyable. I go in, get what I need, and get out fairly quickly.",
        b85: "Not really, no, honestly, buying clothes is more of a necessity for me than something enjoyable. I go in, get what I need, and get out fairly quickly.",
        b9: "Not really, no, honestly, buying clothes is more of a necessity for me than something enjoyable. I go in, get what I need, and get out fairly quickly.",
        meaning: "honestly = সত্যি বলতে"
    },
    {
        id: 162,
        question: "Do you think online shopping is popular in your country?",
        b75: "Yes, definitely, it's become increasingly popular in Bangladesh recently, especially among younger, tech-savvy people who are comfortable shopping through apps and websites.",
        b85: "Yes, definitely, it's become increasingly popular in Bangladesh recently, especially among younger, tech-savvy people who are comfortable shopping through apps and websites.",
        b9: "Yes, definitely, it's become increasingly popular in Bangladesh recently, especially among younger, tech-savvy people who are comfortable shopping through apps and websites.",
        meaning: "comfortable = আরামদায়ক | especially = বিশেষ করে"
    },
    {
        id: 163,
        question: "What are the advantages of shopping online?",
        b75: "There are quite a few advantages, convenience being the main one, you can shop from home anytime. It also makes comparing prices across different sellers a lot easier, and it generally saves time compared to physically visiting multiple shops.",
        b85: "There are quite a few advantages, honestly, convenience being the main one, you can shop from home anytime. It also makes comparing prices across different sellers a lot easier, and it generally saves time compared to physically visiting multiple shops.",
        b9: "There are quite a few advantages, honestly, convenience being the main one, you can shop from home anytime. It also makes comparing prices across different sellers a lot easier, and it generally saves time compared to physically visiting multiple shops.",
        meaning: "generally = সাধারণভাবে | honestly = সত্যি বলতে | compared = তুলনা করলে"
    },
    {
        id: 164,
        question: "Do you like sports?",
        b75: "Yes, definitely, football especially, I really enjoy following it, watching matches, that kind of thing. I don't play as much as I used to, but I'm still a big fan as a spectator.",
        b85: "Yes, definitely, football especially, I really enjoy following it, watching matches, that kind of thing. I don't play as much as I used to, but I'm still a big fan as a spectator.",
        b9: "Yes, definitely, football especially, I really enjoy following it, watching matches, that kind of thing. I don't play as much as I used to, but I'm still a big fan as a spectator.",
        meaning: "especially = বিশেষ করে"
    },
    {
        id: 165,
        question: "What's your favourite sport?",
        b75: "Football, without a doubt, it's my favourite by far. I'm a big fan of Argentina, and watching Messi play has always been something I really look forward to.",
        b85: "Football, without a doubt, it's my favourite by far. I'm a big fan of Argentina, and watching Messi play has always been something I really look forward to.",
        b9: "Football, without a doubt, it's my favourite by far. I'm a big fan of Argentina, and watching Messi play has always been something I really look forward to.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 166,
        question: "Do you watch sport on TV?",
        b75: "Yes, definitely, mostly football, especially when Argentina's playing, I'll make sure to catch that. I don't really watch other sports as regularly, though.",
        b85: "Yes, definitely, mostly football, especially when Argentina's playing, I'll make sure to catch that. I don't really watch other sports as regularly, though.",
        b9: "Yes, definitely, mostly football, especially when Argentina's playing, I'll make sure to catch that. I don't really watch other sports as regularly, though.",
        meaning: "especially = বিশেষ করে | regularly = নিয়মিত"
    },
    {
        id: 167,
        question: "Did you play sport when you were a child?",
        b75: "Yes, definitely, football mostly, I used to play with friends in the neighborhood pretty regularly as a kid, it was one of the highlights of my day, honestly.",
        b85: "Yes, definitely, football mostly, I used to play with friends in the neighborhood pretty regularly as a kid, it was one of the highlights of my day, honestly.",
        b9: "Yes, definitely, football mostly, I used to play with friends in the neighborhood pretty regularly as a kid, it was one of the highlights of my day, honestly.",
        meaning: "neighborhood = পাড়া / মহল্লা | regularly = নিয়মিত | honestly = সত্যি বলতে"
    },
    {
        id: 168,
        question: "Do you think it's important to play sport?",
        b75: "Yes, definitely, I think it's genuinely important. It helps with physical fitness, obviously, but it also teaches valuable things like teamwork and discipline.",
        b85: "Yes, definitely, I think it's genuinely important. It helps with physical fitness, obviously, but it also teaches valuable things like teamwork and discipline.",
        b9: "Yes, definitely, I believe it's genuinely essential. It helps with physical fitness, obviously, but it also teaches valuable things like teamwork and discipline.",
        meaning: "teamwork = দলগত কাজ"
    },
    {
        id: 169,
        question: "Why do people like watching sport?",
        b75: "I think it's mainly the excitement and unpredictability, you never really know what's going to happen, which makes it thrilling. Supporting a team also gives people a sense of belonging and shared excitement with others.",
        b85: "I think it's mainly the excitement and unpredictability, you never really know what's going to happen, which makes it thrilling. Supporting a team also gives people a sense of belonging and shared excitement with others.",
        b9: "I believe it's mainly the excitement and unpredictability, you never really know what's going to happen, which makes it thrilling. Supporting a team also gives people a sense of belonging and shared excitement with others.",
        meaning: "support = সহায়তা"
    },
    {
        id: 170,
        question: "Do you often watch TV?",
        b75: "Not that often, no, most of my viewing happens online these days, YouTube especially, rather than traditional television. I might catch the news or a football match on TV occasionally, though.",
        b85: "Not that often, no, most of my viewing happens online these days, YouTube especially, rather than traditional television. I might catch the news or a football match on TV occasionally, though.",
        b9: "Not that often, no, most of my viewing happens online these days, YouTube especially, rather than traditional television. I might catch the news or a football match on TV occasionally, though.",
        meaning: "occasionally = মাঝেমধ্যে | traditional = ঐতিহ্যবাহী | especially = বিশেষ করে | occasion = অনুষ্ঠান / উপলক্ষ"
    },
    {
        id: 171,
        question: "What kind of TV programmes do you like?",
        b75: "I mostly like the news and football matches when I do watch TV, and occasionally educational programmes or documentaries too, if something interesting comes on.",
        b85: "I mostly like the news and football matches when I do watch TV, and occasionally educational programmes or documentaries too, if something interesting comes on.",
        b9: "I mostly like the news and football matches when I do watch TV, and occasionally educational programmes or documentaries too, if something interesting comes on.",
        meaning: "occasionally = মাঝেমধ্যে | occasion = অনুষ্ঠান / উপলক্ষ"
    },
    {
        id: 172,
        question: "What was your favourite show when you were a child?",
        b75: "Honestly, I can't recall one specific favourite, I watched some cartoons occasionally as a kid, but I was never really glued to the TV the way some children are, I was usually outside instead.",
        b85: "Honestly, I can't recall one specific favourite, I watched some cartoons occasionally as a kid, but I was never really glued to the TV the way some children are, I was usually outside instead.",
        b9: "Honestly, I can't recall one specific favourite, I watched some cartoons occasionally as a kid, but I was never really glued to the TV the way some children are, I was generally outside instead.",
        meaning: "occasionally = মাঝেমধ্যে | occasion = অনুষ্ঠান / উপলক্ষ | honestly = সত্যি বলতে | usually = সাধারণত"
    },
    {
        id: 173,
        question: "Do you think TV has changed much in the last few years?",
        b75: "Yes, definitely, quite a lot actually. A lot of people, myself included, have shifted toward online platforms like YouTube or streaming services rather than watching traditional TV channels.",
        b85: "Yes, definitely, quite a lot actually. A lot of people, myself included, have shifted toward online platforms like YouTube or streaming services rather than watching traditional TV channels.",
        b9: "Yes, definitely, quite a lot actually. A lot of people, myself included, have shifted toward online platforms like YouTube or streaming services rather than watching traditional TV channels.",
        meaning: "traditional = ঐতিহ্যবাহী | actually = আসলে"
    },
    {
        id: 174,
        question: "Do you prefer watching TV alone or with your family?",
        b75: "Definitely with family, especially for something like a football match, watching together makes it a lot more enjoyable, there's a shared excitement to it that watching alone just doesn't have.",
        b85: "Definitely with family, especially for something like a football match, watching together makes it a lot more enjoyable, there's a shared excitement to it that watching alone just doesn't have.",
        b9: "Definitely with family, especially for something like a football match, watching together makes it a lot more enjoyable, there's a shared excitement to it that watching alone just doesn't have.",
        meaning: "especially = বিশেষ করে"
    },
    {
        id: 175,
        question: "How often do you watch news on TV?",
        b75: "Not that often on TV specifically, I mostly get my news online or through my phone these days, it's just quicker and more convenient.",
        b85: "Not that often on TV specifically, honestly, I mostly get my news online or through my phone these days, it's just quicker and more convenient.",
        b9: "Not that often on TV specifically, honestly, I mostly get my news online or through my phone these days, it's just quicker and more convenient.",
        meaning: "convenient = সুবিধাজনক | honestly = সত্যি বলতে"
    },
    {
        id: 176,
        question: "How do you usually travel around your city?",
        b75: "In Dhaka, mostly a rickshaw for shorter distances, they're just convenient and I actually enjoy the ride. For longer trips, I'll take a bus, or sometimes the Metrorail if it's along the route.",
        b85: "In Dhaka, mostly a rickshaw for shorter distances, they're just convenient and I actually enjoy the ride. For longer trips, I'll take a bus, or sometimes the Metrorail if it's along the route.",
        b9: "In Dhaka, mostly a rickshaw for shorter distances, they're just convenient and I actually enjoy the ride. For longer trips, I'll take a bus, or on some occasions the Metrorail if it's along the route.",
        meaning: "convenient = সুবিধাজনক | actually = আসলে"
    },
    {
        id: 177,
        question: "What's your favourite kind of transport?",
        b75: "Definitely the rickshaw, it's my favourite by far. There's something calming about it, especially for short distances, it's slower-paced and lets you actually notice your surroundings.",
        b85: "Definitely the rickshaw, it's my favourite by far. There's something calming about it, especially for short distances, it's slower-paced and lets you actually notice your surroundings.",
        b9: "Definitely the rickshaw, it's my favourite by far. There's something calming about it, especially for short distances, it's slower-paced and lets you actually notice your surroundings.",
        meaning: "especially = বিশেষ করে | actually = আসলে"
    },
    {
        id: 178,
        question: "Do you prefer public transport or private transport?",
        b75: "I'd say public transport, mainly for practical reasons, it's cheaper, and honestly more convenient too, since I don't have to deal with parking or traffic decisions myself.",
        b85: "I'd say public transport, mainly for practical reasons, it's cheaper, and honestly more convenient too, since I don't have to deal with parking or traffic decisions myself.",
        b9: "I'd say public transport, mainly for practical reasons, it's cheaper, and honestly more convenient too, since I don't have to deal with parking or traffic decisions myself.",
        meaning: "convenient = সুবিধাজনক | practical = ব্যবহারিক | transport = পরিবহন | decision = সিদ্ধান্ত | honestly = সত্যি বলতে"
    },
    {
        id: 179,
        question: "Is public transport popular in your country?",
        b75: "Yes, definitely, buses and rickshaws especially are hugely popular here, mainly because they're affordable and widely available, even in smaller towns.",
        b85: "Yes, definitely, buses and rickshaws especially are hugely popular here, mainly because they're affordable and widely available, even in smaller towns.",
        b9: "Yes, definitely, buses and rickshaws especially are hugely popular here, mainly because they're affordable and widely available, even in smaller towns.",
        meaning: "especially = বিশেষ করে | available = পাওয়া যায় এমন"
    },
    {
        id: 180,
        question: "How could public transport be improved?",
        b75: "I think buses especially could be more punctual and less overcrowded, that's probably the biggest complaint people have. Better road roads and facilities would also help reduce delays caused by traffic.",
        b85: "I think buses especially could be more punctual and less overcrowded, that's probably the biggest complaint people have. Better road roads and facilities would also help reduce delays caused by traffic.",
        b9: "I believe buses especially could be more punctual and less overcrowded, that's probably the biggest complaint people have. Better road roads and facilities would also help reduce delays caused by traffic.",
        meaning: "facilities = সুবিধাসমূহ | especially = বিশেষ করে | crowded = জনাকীর্ণ"
    },
    {
        id: 181,
        question: "Do you enjoy long journeys?",
        b75: "Yes, I really enjoy long journeys, especially by train, there's something relaxing about watching the scenery pass by, especially through the countryside.",
        b85: "Yes, actually, I really enjoy long journeys, especially by train, there's something relaxing about watching the scenery pass by, especially through the countryside.",
        b9: "Yes, actually, I really enjoy long journeys, especially by train, there's something relaxing about watching the scenery pass by, especially through the countryside.",
        meaning: "especially = বিশেষ করে | actually = আসলে | scenery = প্রাকৃতিক দৃশ্য | journey = ভ্রমণ | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 182,
        question: "Do you like travelling?",
        b75: "Yes, definitely, I really enjoy travelling, train journeys especially, there's something relaxing about watching the landscape change as you move. I especially like trips that involve nature or countryside views.",
        b85: "Yes, definitely, I really enjoy travelling, train journeys especially, there's something relaxing about watching the landscape change as you move. I especially like trips that involve nature or countryside views.",
        b9: "Yes, definitely, I really enjoy travelling, train journeys especially, there's something relaxing about watching the landscape change as you move. I especially like trips that involve nature or countryside views.",
        meaning: "especially = বিশেষ করে | journey = ভ্রমণ | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 183,
        question: "What's the best place you've ever visited?",
        b75: "Honestly, I haven't travelled to too many places outside Bangladesh, but within the country, I've really enjoyed visits to areas with a lot of natural scenery, greenery, rivers, that kind of thing, since it matches what I enjoy most about travelling.",
        b85: "Honestly, I haven't travelled to too many places outside Bangladesh, but within the country, I've really enjoyed visits to areas with a lot of natural scenery, greenery, rivers, that kind of thing, since it matches what I enjoy most about travelling.",
        b9: "Honestly, I haven't travelled to too many places outside Bangladesh, but within the country, I've really enjoyed visits to areas with a lot of natural scenery, greenery, rivers, that kind of thing, since it matches what I enjoy most about travelling.",
        meaning: "honestly = সত্যি বলতে | natural = প্রাকৃতিক | scenery = প্রাকৃতিক দৃশ্য"
    },
    {
        id: 184,
        question: "How do you usually travel long distances?",
        b75: "Usually by bus or train, depending on the destination and what's available. I definitely enjoy train journeys the most, though, they're more comfortable and relaxing.",
        b85: "Usually by bus or train, depending on the destination and what's available. I definitely enjoy train journeys the most, though, they're more comfortable and relaxing.",
        b9: "Usually by bus or train, depending on the destination and what's available. I definitely enjoy train journeys the most, though, they're more comfortable and relaxing.",
        meaning: "comfortable = আরামদায়ক | destination = গন্তব্য | available = পাওয়া যায় এমন | usually = সাধারণত | journey = ভ্রমণ"
    },
    {
        id: 185,
        question: "Do you like travelling with family or friends?",
        b75: "Honestly, both have their own appeal. With family, travelling feels more comfortable and relaxed, while with friends, it tends to be a bit more spontaneous and fun, so I don't think I could really choose one over the other.",
        b85: "Honestly, both have their own appeal. With family, travelling feels more comfortable and relaxed, while with friends, it tends to be a bit more spontaneous and fun, so I don't think I could really choose one over the other.",
        b9: "Honestly, both have their own appeal. With family, travelling feels more comfortable and relaxed, while with friends, it tends to be a bit more spontaneous and fun, so I don't think I could really choose one over the other.",
        meaning: "comfortable = আরামদায়ক | honestly = সত্যি বলতে | relaxed = স্বস্তিদায়ক | relax = বিশ্রাম নেওয়া"
    },
    {
        id: 186,
        question: "What places would you like to visit in the future?",
        b75: "I'd really like to visit Germany at some point, mainly because I'm interested in pursuing higher studies there eventually, so it would be nice to actually experience the country before committing to that.",
        b85: "I'd really like to visit Germany at some point, mainly because I'm interested in pursuing higher studies there eventually, so it would be nice to actually experience the country before committing to that.",
        b9: "I'd really like to visit Germany at some point, mainly because I'm interested in pursuing higher studies there eventually, so it would be nice to actually experience the country before committing to that.",
        meaning: "experience = অভিজ্ঞতা | eventually = শেষ পর্যন্ত | actually = আসলে"
    },
    {
        id: 187,
        question: "Do you prefer travelling to new places or visiting the same places again?",
        b75: "I'd say new places, mostly, I like the excitement of experiencing somewhere different. That said, I wouldn't mind revisiting somewhere I genuinely loved, there's comfort in familiarity too.",
        b85: "I'd say new places, mostly, I like the excitement of experiencing somewhere different. That said, I wouldn't mind revisiting somewhere I genuinely loved, there's comfort in familiarity too.",
        b9: "I'd say new places, mostly, I like the excitement of experiencing somewhere different. That said, I wouldn't mind revisiting somewhere I genuinely loved, there's comfort in familiarity too.",
        meaning: "usually = সাধারণত | prefer = বেশি পছন্দ করা | because = কারণ"
    },
    {
        id: 188,
        question: "What's the weather like where you live?",
        b75: "It's generally hot and humid for most of the year, especially during summer, and then quite wet during the monsoon season, when we get heavy rainfall regularly.",
        b85: "It's generally hot and humid for most of the year, especially during summer, and then quite wet during the monsoon season, when we get heavy rainfall regularly.",
        b9: "It's generally hot and humid for most of the year, especially during summer, and then quite wet during the monsoon season, when we get heavy rainfall regularly.",
        meaning: "especially = বিশেষ করে | regularly = নিয়মিত | generally = সাধারণভাবে | rainfall = বৃষ্টিপাত | monsoon = বর্ষাকাল"
    }
];
