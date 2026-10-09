const speakingData = [
    {
        id: 5,
        question: "Where do you come from? / Where are you from?",
        b6: "I come from Noakhali, actually Maijdee Court, which is in the Chattogram division of Bangladesh. I grew up there, so it feels like my real hometown, although my family's original home is in Chandpur. I like Noakhali because it's quiet and the people are very friendly.",
        b65: "I'm originally from Maijdee Court in Noakhali, which is part of the Chattogram division. I was born and raised there, so I’m quite emotionally attached to the place. It’s a relatively quiet area, surrounded by a pleasant natural environment, which I really appreciate. Although I currently live in Dhaka for my studies, I still consider Noakhali my hometown and I always enjoy going back whenever I get the chance.",
        b7: "That's actually a bit of an interesting question for me, because I have two hometowns in a way. I was born and brought up in Maijdee Court, Noakhali, which is in the Chattogram division, so that's the place I identify with emotionally — it's where all my childhood memories are. But our family's ancestral home is a village called Subidpur in Chandpur, so I still have roots there too. Noakhali is the one I'd call home, though, mainly because of the people and the peaceful atmosphere I grew up around."
    },
    {
        id: 6,
        question: "Do you work or study?",
        b6: "I am a student. I study Business Administration, my major is Accounting, at Dhaka College in Dhaka. I recently got admitted after finishing my HSC in Noakhali.",
        b65: "I'm currently a university student. I'm doing a BBA with a major in Accounting at Dhaka College, and I just started this year after completing my HSC at Noakhali Government College. So it's still quite new for me, but I'm enjoying it so far.",
        b7: "I'm a full-time student at the moment. I've just been admitted to Dhaka College, where I'm doing a BBA majoring in Accounting. Before that, I finished my HSC at Noakhali Government College back in my hometown, so moving to Dhaka for university has actually been a pretty big transition for me, both academically and in terms of getting used to city life."
    },
    {
        id: 7,
        question: "Do you like your subject?",
        b6: "Yes, I like it. I chose Accounting because I want to understand business and finance better. I think it will help me in my future career, so I'm interested in studying it.",
        b65: "Yes, I genuinely like it. I chose Accounting mainly because it helps me understand how businesses actually run — things like financial decisions and how organizations manage money. Since I want to become a businessman one day, I think this subject gives me a really solid foundation for that.",
        b7: "Yeah, I do, quite a lot actually. What draws me to Accounting is that it's not just about numbers — it's really about understanding how businesses make decisions, manage risk, and stay profitable. Since my long-term goal is to build my own business someday, I see this subject as giving me the practical foundation I'll need, rather than just something I'm studying to pass exams."
    },
    {
        id: 9,
        question: "How did your parents choose your name?",
        b6: "I'm not completely sure about the exact reason, but I know my name has an Islamic meaning. My parents usually choose names with a good meaning, and I think that's common in most Bangladeshi families.",
        b65: "Honestly, I've never asked them the full story, but I know my name has a religious meaning, since most Bangladeshi Muslim families choose names connected to Islam. I think my parents wanted a name that sounded meaningful and would represent good values as I grew up.",
        b7: "That's actually something I've never asked them properly, to be honest, but I do know it has an Islamic background, which is pretty typical in Bangladeshi families — parents usually pick names that carry a positive or spiritual meaning rather than just something that sounds nice. I'd guess my parents wanted a name that would represent good character, since that's usually the thinking behind it here."
    },
    {
        id: 10,
        question: "Where do you want to see yourself after 10 years in terms of your career?",
        b6: "In 10 years, I want to be a successful businessman. I hope to have my own business by then. I also want to keep learning new things and improve myself in that time.",
        b65: "In 10 years' time, I'd like to have established my own business, probably something connected to what I'm studying now, since I'm majoring in Accounting. Besides that, I want to keep growing both professionally and personally, and hopefully be in a position where I can contribute something positive to society as well.",
        b7: "That's something I actually think about quite a lot. Ideally, in about 10 years, I'd like to have built up my own business — nothing too specific yet, but definitely something rooted in what I'm learning now, since understanding finance and organizations is a big part of my degree. Beyond just career success, though, I'd also want to have made some kind of meaningful contribution to society by then, rather than just focusing on profit for its own sake."
    },
    {
        id: 11,
        question: "Tell me about your best friend at school.",
        b6: "My best friend's name is Aryan. We have known each other for a long time and we grew up in the same area. He is studying Law at a private university now. We talk about our studies and our future plans together.",
        b65: "My best friend is Aryan — we've known each other since we were kids, actually, because we grew up in the same neighbourhood. He's currently studying Law at a private university, while I'm doing Accounting, so our subjects are quite different, but that doesn't really affect our friendship. We usually talk about our studies, personal problems, and future plans whenever we get the chance.",
        b7: "That would be Aryan. We've basically known each other our whole lives, since we grew up in the same area and went through school together. These days he's studying Law at a private university and I'm doing Accounting, so our academic paths have gone in pretty different directions, but if anything, that's made our conversations more interesting — we end up discussing all kinds of things, from our studies to personal problems to where we see ourselves in the future. He's honestly one of the people I trust the most."
    },
    {
        id: 16,
        question: "How often do you meet your best friend?",
        b6: "We don't meet very often now because I moved to Dhaka for my studies. Before, we used to meet almost every week, but now maybe once a month, or we talk on the phone instead.",
        b65: "Honestly, not as often as before, since I moved to Dhaka for university and he's still based near our hometown. We used to see each other almost every week, but now it's more like once a month, if that. We make up for it by messaging or calling fairly regularly, though.",
        b7: "Not nearly as much as I'd like to, to be honest. Ever since I moved to Dhaka for university, meeting up in person has become pretty difficult, so it's dropped from almost every week to maybe once a month, sometimes less during exam periods. That said, we've kept the friendship going through phone calls and messages, so distance hasn't really weakened things between us, if anything it's made us appreciate the time we do get together."
    },
    {
        id: 17,
        question: "What do you usually do together when you meet?",
        b6: "We usually just talk a lot. We discuss our studies, our problems, and our future plans. Sometimes we also go out for food together or just walk around and talk.",
        b65: "Mostly we just catch up on everything that's happened since we last met — studies, personal problems, future plans, that kind of thing. We also like grabbing food together sometimes, or just walking around and chatting, nothing too structured, really.",
        b7: "Honestly, we don't really plan anything specific — it's mostly just catching up on whatever's been going on, whether that's studies, personal stuff, or future plans. We'll often grab some food somewhere or just wander around talking for hours, which sounds simple, but it's actually one of the things I look forward to most, since it feels like picking up right where we left off, no matter how much time has passed."
    },
    {
        id: 18,
        question: "Do you think having close friends is important? Why?",
        b6: "Yes, I think it's very important. Close friends can support you when you have problems, and they understand you well. Without close friends, life can feel lonely.",
        b65: "Yes, definitely. I think close friends give you emotional support that even family sometimes can't provide in the same way, because friends often understand your generation and your specific struggles better. Also, having someone to share both good and bad times with really makes a difference to your mental well-being.",
        b7: "Absolutely, I'd say it's one of the most important things in life, really. Close friends offer a kind of support that's different from family — they understand what you're going through in a more relatable way, especially things like academic pressure or personal struggles that come with being our age. Beyond just emotional support, though, I think they also shape who you become, since you tend to pick up habits, perspectives, and values from the people you're closest to."
    },
    {
        id: 19,
        question: "What do you study? / Where do you study that?",
        b6: "I study Business Administration, with a major in Accounting. I study at Dhaka College, which is in Dhaka, the capital of Bangladesh.",
        b65: "I'm doing a Bachelor of Business Administration, majoring in Accounting, and I study at Dhaka College here in Dhaka. It's a well-known college, so I'm quite happy to be studying there.",
        b7: "I'm currently pursuing a BBA with a major in Accounting at Dhaka College, right here in Dhaka. It's actually one of the more reputable colleges for this kind of programme, so getting admitted felt like a real achievement, especially coming from a government college outside Dhaka."
    },
    {
        id: 21,
        question: "Why did you choose that subject?",
        b6: "I chose Accounting because I am interested in business and finance. I think it is useful for my future, especially if I want to start a business one day.",
        b65: "I chose Accounting mainly because I've always been interested in how businesses manage their money and make financial decisions. Since my goal is to become a successful businessman eventually, I felt this subject would give me the practical knowledge I'd actually need, rather than something purely theoretical.",
        b7: "Honestly, it came down to what I wanted for my future. I've always been interested in business, and Accounting felt like the most practical way into that world, since it teaches you how money actually moves through an organization, not just abstract theory. Given that my long-term goal is to run my own business, it made sense to build that kind of foundation early, rather than jumping straight into something more general like management without understanding the numbers behind it first."
    },
    {
        id: 22,
        question: "Is it a popular subject in your country?",
        b6: "Yes, I think it is quite popular. Many students choose Business Administration or Accounting because there are good job opportunities after graduation.",
        b65: "Yes, definitely, Business subjects like Accounting are pretty popular in Bangladesh, mainly because they lead to a wide range of career options, like banking, corporate jobs, or even starting your own business. A lot of students see it as a safer, more practical choice compared to some other fields.",
        b7: "Yeah, it's actually one of the more popular choices, especially among students who want solid career prospects rather than something more uncertain. Business and Accounting graduates can go into banking, corporate finance, auditing, or even entrepreneurship, so there's a real sense that the degree keeps your options open. I think that practicality is exactly why so many families here encourage their children toward it, rather than it just being a personal passion for most students."
    },
    {
        id: 24,
        question: "Do you get on with your classmates?",
        b6: "Yes, I get on well with them. We are all new students, so we are still getting to know each other, but everyone seems friendly and helpful so far.",
        b65: "Yes, generally I do. Since we're all fairly new, we're still in the process of getting to know one another, but so far most of my classmates have been friendly and cooperative, especially when it comes to sharing notes or helping with assignments.",
        b7: "Yeah, pretty well, actually, though we're all still figuring each other out since it's early days at Dhaka College. What's been nice is that a lot of my classmates are genuinely cooperative rather than competitive — we help each other out with notes, discuss assignments together, that kind of thing, which makes settling into a new environment a lot less stressful than I expected."
    },
    {
        id: 25,
        question: "What was your first day like?",
        b6: "My first day was a little nervous but exciting. I didn't know anyone at first, but I met some new classmates and the teachers explained the course structure. Overall, it was a good experience.",
        b65: "Honestly, my first day was a mix of nerves and excitement, since I didn't know anyone there yet. But things got easier once I started talking to a few classmates during breaks, and the teachers gave us a clear overview of the course structure, which helped me feel more settled by the end of the day.",
        b7: "It was a bit overwhelming, to be honest, mainly because everything was new — new city, new college, new faces, all at once. I didn't know a single person walking in, which was a little intimidating, but that changed pretty quickly once I ended up chatting with a few classmates during the breaks. By the time the day wrapped up, with the teachers walking us through the course structure and expectations, I actually felt fairly optimistic about the whole thing, rather than anxious like I had been that morning."
    },
    {
        id: 26,
        question: "What are the main aspects of your subject?",
        b6: "Accounting includes things like recording financial transactions, preparing financial statements, and understanding taxes. It also covers some business and management topics.",
        b65: "Accounting mainly covers how to record and organize financial transactions, prepare financial statements like balance sheets, and understand areas like taxation and auditing. Alongside that, there are also some broader business and management topics, since it's part of a BBA programme rather than a pure accounting degree.",
        b7: "There are quite a few core areas, really. At its heart, Accounting is about recording and organizing financial transactions accurately, then using that information to prepare statements like balance sheets and income statements, which businesses rely on to make decisions. Beyond the technical side, it also touches on taxation, auditing, and financial analysis, and since I'm doing a BBA rather than a standalone accounting degree, there's a good mix of broader management and business topics woven in as well, which I think gives a more well-rounded understanding overall."
    },
    {
        id: 27,
        question: "Where is your hometown?",
        b6: "My hometown is Maijdee Court, in Noakhali district, which is part of the Chattogram division of Bangladesh.",
        b65: "My hometown is Maijdee Court in Noakhali, which falls under the Chattogram division. It's a fairly well-known area within the district.",
        b7: "It's Maijdee Court, in Noakhali district, part of the Chattogram division — it's actually the administrative centre of the district, so it's reasonably well known within Bangladesh."
    },
    {
        id: 28,
        question: "Do you like your hometown?",
        b6: "Yes, I like it a lot. It's peaceful, the people are friendly, and I have many good memories there.",
        b65: "Yes, definitely. It's quiet compared to Dhaka, people are generally friendly, and it holds a lot of childhood memories for me, so I feel quite attached to it.",
        b7: "Yeah, genuinely, I do — it's got this calm, familiar feeling that Dhaka just doesn't have, and combined with all the memories tied to it, it really does feel like home in a way no other place quite does."
    },
    {
        id: 29,
        question: "Do you often visit your hometown?",
        b6: "Not very often now, because I live in Dhaka for my studies. I usually go back during holidays, like Eid, or when college is closed for a few weeks.",
        b65: "Not as often as I'd like, to be honest, since I'm based in Dhaka now for university. I mostly go back during holidays, especially Eid, or whenever there's a longer break from college.",
        b7: "Not nearly as often as before, unfortunately, since moving to Dhaka has really limited how much free time I have to travel back. Realistically, it's mainly during the bigger holidays, Eid especially, or when college shuts down for an extended break, that I actually get the chance to go home, so those visits have become something I look forward to a lot more than they used to."
    },
    {
        id: 30,
        question: "What is your hometown like?",
        b6: "It's a peaceful town, not too big or crowded. The people are friendly, and there is a lot of natural greenery around, since it's not far from the coast.",
        b65: "It's a fairly calm, mid-sized town, quite different from a busy city like Dhaka. There's a good amount of greenery around, and since Noakhali is a coastal district, you can feel that influence in the landscape and lifestyle too. Overall, the atmosphere is relaxed, and people tend to know each other.",
        b7: "It's a fairly calm, mid-sized town, nothing like the pace of Dhaka. Being part of a coastal district, there's a noticeable natural element to it, plenty of greenery, open space, and a general closeness to nature that shapes daily life there. What really stands out to me, though, is how tightly-knit the community feels, everyone more or less knows everyone, which gives the whole place a relaxed, familiar sort of atmosphere you don't really find in a big city."
    },
    {
        id: 31,
        question: "What is the oldest place in your hometown?",
        b6: "I'm not completely sure about the exact oldest place, but there are some old areas in the town centre with buildings that have been there for a long time. I think the old part of the market is quite historic.",
        b65: "To be honest, I don't know the exact oldest building, but there's definitely an older part of town, around the traditional market area, where some structures have clearly been standing for generations. It has a different character from the newer parts of town.",
        b7: "I'll be honest, I don't know the precise answer to that, but there's a noticeably older section of town, particularly around the traditional market and some of the older residential streets, where you can tell the buildings have been standing for generations just from the style and the wear on them. It has a completely different feel from the newer, more developed parts of town, almost like walking through two different time periods."
    },
    {
        id: 32,
        question: "What is there for a foreigner to do or see in your hometown?",
        b6: "There isn't much for tourists exactly, since it's not a big tourist destination. But a foreigner could enjoy the local food, the natural scenery, and experience local culture and daily life.",
        b65: "It's not really a typical tourist spot, but a foreigner could still enjoy quite a lot — trying authentic local food, especially seafood since it's a coastal area, exploring the natural scenery, and just getting a genuine feel for everyday Bangladeshi life outside the big cities.",
        b7: "It's honestly not a typical tourist destination, so there's nothing like a famous landmark to point to, but I actually think that's part of the appeal for a foreigner. They'd get to try genuinely authentic local food, seafood especially, given it's a coastal district, take in the natural scenery, and more than anything, experience real, everyday Bangladeshi life rather than a curated tourist version of it, which I think is actually a pretty rare and valuable experience."
    },
    {
        id: 33,
        question: "How could your hometown be improved?",
        b6: "I think the roads and transportation could be better. Also, there could be more job opportunities so young people don't have to move to Dhaka.",
        b65: "I think a few things could be improved, actually. The road infrastructure and public transport could definitely be developed further, and there could be more local job opportunities, especially for young graduates, so people wouldn't feel forced to move to Dhaka just to build a career.",
        b7: "There's a fair bit of room for improvement, I'd say. Infrastructure, roads and public transport especially, could be upgraded quite a bit, and honestly the bigger issue is the lack of local job opportunities, which pushes a lot of young, educated people, myself probably included, toward Dhaka just to build any kind of serious career. If the local economy could offer more of that, I think fewer families would end up split apart the way mine effectively is now, with me studying so far from home."
    },
    {
        id: 34,
        question: "Has your hometown changed much since you were a child?",
        b6: "Yes, it has changed a bit. There are more shops and buildings now than when I was young. But it's still fairly peaceful compared to a big city.",
        b65: "Yes, definitely, quite a bit actually. There are more buildings, shops, and better roads now compared to when I was a child, so it feels more developed. That said, it hasn't lost its peaceful, small-town character, which I'm honestly quite glad about.",
        b7: "Yeah, noticeably, actually. There's a lot more development now, more buildings, shops, better roads, than there was when I was a kid, so in that sense it's definitely modernized. What's interesting, though, is that despite all that, it hasn't really lost its core character, it's still a fairly peaceful, close-knit place, which honestly surprised me a bit, given how quickly things usually change in Bangladesh."
    },
    {
        id: 35,
        question: "Is there good public transportation in your hometown?",
        b6: "It's okay, but not perfect. There are buses and rickshaws, which are common, but the roads and transport system could be better organized.",
        b65: "It's reasonably good for local travel, mainly buses and rickshaws, which are the most common way to get around. That said, the system isn't always well organized, so travelling can take longer than it probably needs to, especially during busier times.",
        b7: "It's okay, but I wouldn't call it particularly efficient. Buses and rickshaws are the main options, and they do the job for local travel, but the whole system feels a bit disorganized compared to somewhere like Dhaka, where there's at least an attempt at structured routes. Honestly, one thing I really love, though, is the rickshaw itself, especially for short distances, there's something relaxing about it that a bus just can't match."
    },
    {
        id: 36,
        question: "Do you think your hometown is a good place to bring up children?",
        b6: "Yes, I think so. It's peaceful and safe, and there's a strong sense of community, which is good for children growing up.",
        b65: "Yes, I'd say so, definitely. It's safe, peaceful, and there's a strong community feeling, which I think is really valuable for children. They also get more exposure to nature and open space compared to growing up in a crowded city.",
        b7: "Yeah, I genuinely think so. Beyond just being safe and peaceful, there's a strong sense of community there, which means children grow up around people who actually know and look out for them, not just their immediate family. They also get a lot more exposure to nature and open space, which I think matters more than people sometimes realize, especially compared to growing up in an apartment in a crowded city with barely any outdoor space."
    },
    {
        id: 37,
        question: "What is your job? / Where do you work?",
        b6: "I don't have a job right now, I'm a full-time student. But in the future, I'd like to work in business or finance, probably in an office in Dhaka.",
        b65: "I don't currently have a job, since I'm studying full-time, but if I imagine my future one, it would probably be something in business or finance, likely based in an office somewhere in Dhaka, at least to start with.",
        b7: "I don't have a job right now, I'm a full-time student, so this is more hypothetical for me. But if I picture my future career, it'd probably be in business or finance, likely starting out in an office environment in Dhaka before eventually working toward running something of my own."
    },
    {
        id: 39,
        question: "Why did you choose that job? / Is it a popular job in your country?",
        b6: "I would choose business or finance because it matches what I'm studying. It's fairly popular in Bangladesh, since many students study Business Administration.",
        b65: "I'd probably choose something in business or finance, mainly because it matches my studies and interests. It's a fairly popular field in Bangladesh too, a lot of graduates go into it, since it offers a wide range of career paths.",
        b7: "I'd probably choose something in business or finance, mainly because it lines up naturally with what I'm studying and where my interests already lie. It's a fairly popular field here too, a lot of BBA and Accounting graduates go into it, mainly because it opens up a wide range of paths, banking, corporate roles, or eventually entrepreneurship, rather than locking you into just one narrow career."
    },
    {
        id: 41,
        question: "Do you like your job? / Do you get on well with your colleagues?",
        b6: "I don't have a job yet, but I imagine I would enjoy it if it matched my interest in business. I'd also hope to get along well with colleagues.",
        b65: "I can't really say yet, since I don't have a job, but I'd like to think I'd enjoy it, especially if it involves business or finance. Getting along with colleagues would matter a lot to me too, teamwork's important in most workplaces.",
        b7: "I can't really answer that from experience yet, honestly, since I don't have a job, but I'd like to think I'd genuinely enjoy it, especially if it's in business or finance, something aligned with what I'm actually studying. Getting on with colleagues would matter a lot to me too, I've always valued good teamwork, from group projects at college, so I'd hope that carries over into a workplace setting eventually."
    },
    {
        id: 44,
        question: "What responsibilities do you have at work?",
        b6: "I don't have a job now, but I imagine my responsibilities would involve things like managing finances or helping with business decisions.",
        b65: "I don't have a job yet, but I imagine, based on my studies, that my responsibilities would probably involve things like financial reporting, budgeting, or helping with business decisions in some way.",
        b7: "I don't have a job yet, so this is speculative, but based on what I'm studying, I'd imagine my responsibilities would involve something like financial reporting, budgeting, or supporting broader business decisions, the kind of work Accounting graduates typically move into. It's hard to say exactly, though, until I actually start working somewhere."
    },
    {
        id: 45,
        question: "If you had the chance, would you change your job? / Do you plan to change your job in the future?",
        b6: "Since I don't have a job yet, this is hard to answer, but I imagine I would want to keep growing in whatever career I start, or eventually build my own business.",
        b65: "It's hard to answer directly since I don't have a job yet, but I imagine that even in a future job, I'd want to keep growing, and eventually, my real goal would be moving toward my own business rather than staying in the same role forever.",
        b7: "It's hard to answer directly, since I don't have a job yet, but if I project forward, I'd imagine that even in a future job, I wouldn't want to stay static, I'd want to keep learning and growing, and eventually work toward my own business rather than staying in someone else's company indefinitely. So in that sense, any first job would probably be more of a stepping stone than a final destination for me."
    },
    {
        id: 47,
        question: "Where is your home?",
        b6: "My family home is in Noakhali, but right now I live in Dhaka because of my studies at Dhaka College.",
        b65: "My permanent family home is in Noakhali, though I'm currently based in Dhaka for university. So I sort of have two homes at the moment, one where my family lives and one where I actually stay most of the year now.",
        b7: "That depends how you look at it, honestly. My family home, where my parents live, is in Noakhali, but since starting at Dhaka College, I've been living in Dhaka for most of the year, so in a practical sense that's become my home too, even if it doesn't feel quite as permanent yet."
    },
    {
        id: 48,
        question: "Do you live in a house or a flat?",
        b6: "In Noakhali, my family lives in a house. In Dhaka, I stay in a flat that I share with other students since I'm here for college.",
        b65: "My family home in Noakhali is a house, with some outdoor space, which I really enjoy because of my gardening hobby. Here in Dhaka, though, I stay in a shared flat with other students, which is obviously quite different, much smaller and no garden at all.",
        b7: "It's actually a bit of a contrast between my two homes. Back in Noakhali, my family has a house with some outdoor space, which I love, since it's where I do most of my gardening. Here in Dhaka, though, I'm in a shared flat with other students, which is a lot more compact and, unfortunately, doesn't leave much room for that kind of hobby, so it's definitely something I miss."
    },
    {
        id: 49,
        question: "Who do you live with?",
        b6: "In Noakhali, I live with my parents. But in Dhaka, I live with a few other students who are also studying here.",
        b65: "Back home in Noakhali, I live with my parents and the rest of my family. Here in Dhaka, though, I share a place with a couple of other students, so it's quite a different living situation, more independent, but obviously not the same as being with family.",
        b7: "It really depends which home we're talking about. In Noakhali, it's just my parents and family, which is what I'm used to. But here in Dhaka, I share a flat with a couple of other students, so I've had to get used to a much more independent way of living, cooking for myself, managing my own space, that kind of thing, which has honestly been a learning experience in itself."
    },
    {
        id: 50,
        question: "Are there many rooms in your home?",
        b6: "In our house in Noakhali, there are quite a few rooms, like bedrooms, a living room, and a kitchen. In Dhaka, the flat is smaller, so there aren't as many rooms.",
        b65: "Our family home in Noakhali has a reasonable number of rooms, a few bedrooms, a living room, a kitchen, and some outdoor space too. The flat I stay in in Dhaka is much more compact, though, just a bedroom and shared common areas really, since it's meant for students.",
        b7: "Quite a difference between the two, actually. Back home in Noakhali, we've got a decent number of rooms, several bedrooms, a living room, a kitchen, plus some outdoor space for the garden. Here in Dhaka, though, it's a lot more minimal, just a bedroom I share and some common areas, which makes sense given it's essentially a student setup rather than a family home."
    },
    {
        id: 51,
        question: "What is your favourite room?",
        b6: "My favourite room is probably my bedroom in Noakhali, because it's peaceful and I can relax there. I also like being close to the garden from there.",
        b65: "I'd say my bedroom back home in Noakhali, mainly because it's quiet, and it overlooks part of our garden, so I get to see the flowers and trees I've grown, which is quite relaxing, honestly.",
        b7: "Probably my bedroom in Noakhali, if I had to choose. Part of it is just that it's quiet and familiar, but honestly, the real reason is that it overlooks the garden, so I can actually see the flowers and fruit trees I've planted over the years, which is genuinely one of the most relaxing things for me, especially after a long day."
    },
    {
        id: 52,
        question: "How are the walls decorated?",
        b6: "The walls in my room are quite simple, mostly just painted in a light colour. I don't have many decorations, maybe just a calendar or a small shelf.",
        b65: "Honestly, the walls in my room are pretty simple, just a light paint colour without much decoration, maybe a calendar and a small shelf for books. I've never really been someone who decorates a lot, I prefer things to feel clean and uncluttered.",
        b7: "To be honest, they're fairly minimal, just a light paint colour, no posters or anything elaborate, maybe a calendar and a small shelf with some books. I've never really been drawn to heavily decorated spaces, I think I prefer a room that feels clean and uncluttered rather than one packed with things, it helps me focus and relax more, especially when I'm studying."
    },
    {
        id: 53,
        question: "What would you change about your home?",
        b6: "I would probably add more space for a garden if I could. I also think better internet connection would be useful, especially in Noakhali.",
        b65: "If I could change something, I'd probably want more outdoor space for gardening, since I really enjoy growing flowers and trees. Also, a more reliable internet connection would be really useful, especially for online classes and research.",
        b7: "Honestly, if I had to pick one thing, it'd be more outdoor space for gardening, I'd love to experiment with growing a wider variety of flowers and fruit trees than I currently have room for. On a more practical note, though, a faster and more reliable internet connection would genuinely make a big difference too, especially since so much of my studying now involves online research and video content."
    },
    {
        id: 54,
        question: "Do you plan to live there in the future?",
        b6: "In Dhaka, probably not permanently, since I'm only there for my studies. But I do plan to visit my family home in Noakhali often in the future.",
        b65: "I don't think I'll stay in Dhaka permanently, it's mainly for university right now. As for Noakhali, I'd like to keep a strong connection there, even if my career eventually takes me somewhere else, maybe even abroad.",
        b7: "Not permanently in Dhaka, no, it's really just for my studies at the moment. Noakhali is a different story, though, that's the place I'd genuinely want to stay connected to long-term, even if my career eventually takes me somewhere else, possibly abroad for higher studies. I think I'd like to end up settling somewhere that lets me stay close to that connection, even if it's not full-time."
    },
    {
        id: 55,
        question: "What facilities are there near your home?",
        b6: "Near my home in Noakhali, there are local shops, a market, and a mosque nearby. In Dhaka, there are more facilities, like bigger shops, restaurants, and better transport options.",
        b65: "Near our home in Noakhali, there's a local market, some shops, and a mosque within walking distance, which is convenient. Here in Dhaka, though, there's a lot more available, bigger shopping areas, restaurants, and much better transport links, since it's a capital city after all.",
        b7: "Back in Noakhali, it's fairly simple, a local market, a few shops, and a mosque, all within walking distance, which honestly covers most of what you actually need day to day. Dhaka's a different world entirely, though, there's a huge range of facilities nearby, shopping areas, restaurants, and much better transport links, which makes sense given it's the capital, though I do sometimes miss the simplicity of home."
    },
    {
        id: 56,
        question: "What is your neighbourhood like?",
        b6: "My neighbourhood in Noakhali is quiet and friendly. Most people know each other, and it feels safe. In Dhaka, my area is busier and more crowded, but still okay.",
        b65: "My neighbourhood back home in Noakhali is pretty quiet and friendly, most people know each other, which makes it feel safe and welcoming. My area in Dhaka is quite different, much busier and more crowded, but it still has a decent, functional feel to it despite the pace.",
        b7: "Back in Noakhali, it's quiet, friendly, and fairly close-knit, most people know each other by name, which gives it a genuinely safe, welcoming feel. My neighbourhood here in Dhaka couldn't really be more different, it's busy, crowded, constantly full of noise and movement, but there's an energy to it that I've actually come to appreciate in its own way, even if I still prefer the calm of home."
    },
    {
        id: 57,
        question: "Do most people live in houses in your country?",
        b6: "It depends on the area. In villages and smaller towns, most people live in houses. But in big cities like Dhaka, many people live in flats or apartments because there isn't enough space.",
        b65: "It really depends on where you are. In villages and smaller towns, houses are much more common, since there's more available land. But in bigger cities like Dhaka, flats and apartments are far more typical, mainly because space is so limited and the population is so dense.",
        b7: "It varies a lot depending on the area, really. In villages and smaller towns, like where my family's from, houses with some land around them are pretty standard, since space isn't really a constraint there. In a densely populated city like Dhaka, though, it's almost the opposite, flats and apartments dominate, simply because there isn't enough available land to support houses for everyone, given how many people live there."
    },
    {
        id: 58,
        question: "Are you good at art?",
        b6: "Not really, to be honest. I'm not very skilled at drawing or painting. I'm more interested in things like business and gardening, so I never really practiced art much.",
        b65: "Honestly, not particularly. Drawing and painting were never really my strong points, even back in school. I've always been more drawn to practical things, like business or gardening, so I just never invested much time in developing artistic skills.",
        b7: "Honestly, no, not at all, if I'm being truthful. I was never particularly talented at drawing or painting, even as a kid, and I think that's partly because my interests always leaned more toward practical, hands-on things, gardening, for instance, or later on, business and numbers, rather than anything creative in that traditional sense."
    },
    {
        id: 59,
        question: "Did you learn art at school when you were a child?",
        b6: "Yes, we had art classes at school, like drawing and painting. But I wasn't very interested in it, even though I attended the classes.",
        b65: "Yes, we did have art classes as part of the school curriculum, mostly basic drawing and painting. I attended them, obviously, but I never really connected with the subject the way some of my classmates seemed to.",
        b7: "Yeah, we did, it was part of the standard curriculum, basic drawing, painting, that kind of thing. I went along with it like everyone else, but honestly, I never really connected with it the way some of my classmates clearly did, some of them were genuinely talented, while I was just going through the motions, if I'm honest."
    },
    {
        id: 60,
        question: "What kind of art do you like?",
        b6: "I think I like calligraphy, especially Islamic calligraphy, because it looks beautiful and has meaning too. I don't know much about other kinds of art.",
        b65: "If I had to choose, I'd say Islamic calligraphy, mainly because it combines beauty with meaning, it's not just decorative, it usually carries a verse or a message. I don't know a huge amount about other art forms, to be honest, but that's the one that genuinely appeals to me.",
        b7: "If I had to pick something, it'd be Islamic calligraphy, honestly. What appeals to me is that it's not purely decorative, there's usually a verse or meaningful phrase behind it, so it combines visual beauty with something deeper, which I find genuinely appealing. I can't claim to know much about art more broadly, painting, sculpture, and so on, but calligraphy is the one form that's actually caught my attention over the years."
    },
    {
        id: 61,
        question: "Is art popular in your country?",
        b6: "I think traditional art forms like calligraphy and folk art are popular in Bangladesh. Modern art might be less common outside big cities, though.",
        b65: "I'd say traditional art forms, calligraphy, folk art, things like that, are pretty popular and widely appreciated across Bangladesh. Modern or contemporary art, though, tends to be more concentrated in big cities like Dhaka, where there are proper galleries and exhibitions.",
        b7: "It really depends what kind of art you mean, honestly. Traditional forms, calligraphy, folk art, that sort of thing, are genuinely popular and appreciated pretty widely across the country, they're woven into everyday culture. Contemporary or fine art, though, is a different story, it tends to be concentrated mainly in cities like Dhaka, where you actually get proper galleries and exhibitions, so access to it isn't really equal everywhere."
    },
    {
        id: 62,
        question: "Have you ever been to an art gallery?",
        b6: "Not really, no. I haven't visited an art gallery before, mainly because it's not something I've been interested in.",
        b65: "Honestly, no, I haven't, not properly at least. It's just never really been a priority for me, since my interests have always leaned more toward business and nature rather than fine art.",
        b7: "Honestly, no, I don't think I have, not a proper one anyway. It's just never really crossed my radar, my interests have always pulled me more toward things like business, gardening, sport, rather than fine art specifically. That said, now that I think about it, I probably should visit one at some point, if only to broaden my perspective a bit."
    },
    {
        id: 63,
        question: "Do you think children can benefit from going to art galleries?",
        b6: "Yes, I think so. It can help children become more creative and learn to appreciate different kinds of art from a young age.",
        b65: "Yes, definitely, I think it can be really beneficial. Exposure to art from an early age can help children develop creativity and also teaches them to appreciate different perspectives, not just in art, but maybe in life more generally too.",
        b7: "Yes, absolutely, I think so, even though I didn't have much of that exposure myself. Being around different kinds of art from an early age probably helps children develop creativity, but I'd guess it goes beyond that too, it likely teaches them to notice detail, appreciate different perspectives, and think in ways that aren't purely logical or academic, which I think is genuinely valuable, even for someone like me who ended up more drawn to business and numbers."
    },
    {
        id: 64,
        question: "Do you have a bike?",
        b6: "No, I don't have a bike right now. I used to ride one when I was younger, but these days I mostly use rickshaws or buses instead.",
        b65: "No, not currently. I did have one when I was a kid and used it quite a bit back then, but these days I mostly rely on rickshaws for short distances and buses for longer ones.",
        b7: "No, I don't own one at the moment, though I definitely did as a kid and rode it around quite a bit. These days, though, I've kind of shifted toward rickshaws for shorter distances, honestly, there's something about a rickshaw ride I just find more relaxing, and buses or trains for anything longer."
    },
    {
        id: 66,
        question: "How old were you when you learned to ride a bike?",
        b6: "I think I was around seven or eight years old. My father or maybe a cousin taught me, I don't remember exactly.",
        b65: "I was around seven or eight, I think, when I first learned. It was one of my relatives who taught me, though I don't remember the exact details anymore, it's been a while.",
        b7: "I'd say around seven or eight, though I couldn't tell you the exact year, to be honest, it's a bit hazy now. I do remember falling off a fair few times before I actually got the hang of it, which I think is pretty normal for most kids learning to cycle."
    },
    {
        id: 67,
        question: "Do many people in your country use bicycles?",
        b6: "Yes, quite a lot, especially in villages and smaller towns, where roads are less busy. In big cities like Dhaka, fewer people use bicycles because of traffic.",
        b65: "Yes, bicycles are still fairly common, particularly in rural areas and smaller towns where the roads are quieter and more suitable for cycling. In busy cities like Dhaka, though, fewer people cycle, mainly because the traffic makes it quite dangerous and impractical.",
        b7: "Yes, they're still reasonably common, especially outside the big cities, in villages and smaller towns, the roads tend to be quieter, so cycling is a lot more practical and safer there. In a city like Dhaka, though, it's a different story entirely, the traffic is so heavy and chaotic that cycling can actually be quite dangerous, so a lot of people end up relying on other transport instead, like rickshaws or buses."
    },
    {
        id: 68,
        question: "Do you think using bicycles should be encouraged?",
        b6: "Yes, I think so. Bicycles are good for health and also good for the environment because they don't cause pollution.",
        b65: "Yes, definitely, I think it should be encouraged more. Cycling is great exercise, it's environmentally friendly since it doesn't produce any pollution, and it can also help reduce traffic congestion in cities if more people used bikes instead of cars.",
        b7: "Yes, absolutely, I'd say so. There are so many benefits, really, it's good exercise, completely pollution-free, and if more people cycled instead of driving, it could genuinely help ease traffic congestion in cities like Dhaka. That said, I do think proper cycling infrastructure, dedicated lanes and so on, would need to come first, because right now the roads just aren't really designed with cyclist safety in mind."
    },
    {
        id: 69,
        question: "Did you enjoy your childhood?",
        b6: "Yes, I really enjoyed it. I grew up in Noakhali, and I have a lot of good memories, like playing outside and spending time with family.",
        b65: "Yes, definitely, I'd say I had a genuinely happy childhood. Growing up in Noakhali, I got to spend a lot of time outdoors, playing with friends and later developing an interest in gardening, so it was quite a peaceful and active childhood overall.",
        b7: "Yeah, honestly, I'd say I had a really happy childhood. Growing up in Noakhali gave me a lot of freedom to be outdoors, playing with friends, later on discovering gardening, which turned into something I still genuinely love today. Looking back, I think that combination of freedom and a close community really shaped who I am now, more than I probably realized at the time."
    },
    {
        id: 70,
        question: "What is your first memory of your childhood?",
        b6: "I think one of my first memories is playing in our garden at home. I remember it being a happy and simple time.",
        b65: "One of my earliest memories is probably being in our garden at home, maybe helping my parents plant something, or just playing around the flowers and trees. It's a fairly simple memory, but it's stuck with me for some reason.",
        b7: "Honestly, one of the earliest things I can recall is being in our garden at home, quite young, maybe helping my parents plant something, or just wandering around among the flowers and trees. It's not a particularly dramatic memory, nothing really happened, but for some reason it's stuck with me clearly over the years, maybe because it planted the seed, quite literally, for the gardening hobby I still have today."
    },
    {
        id: 71,
        question: "Did you have a lot of friends when you were a child?",
        b6: "Yes, I had quite a few friends in my neighbourhood. We used to play together outside a lot after school.",
        b65: "Yes, I had a decent group of friends growing up, mostly kids from the neighbourhood. We'd play outside together most afternoons after school, so there was always someone around to hang out with.",
        b7: "Yeah, I did, a fair few actually, mostly neighbourhood kids who I'd end up playing with most afternoons once school finished. Looking back, I think growing up somewhere like Noakhali made that a lot easier, everyone kind of knew everyone, so there was never really a shortage of people to hang out with, unlike I imagine it might be in a more anonymous, closed-off city environment."
    },
    {
        id: 72,
        question: "What did you enjoy doing as a child?",
        b6: "I enjoyed playing outside, especially in our garden. I also liked spending time with animals, since we had pets at home.",
        b65: "I really enjoyed being outdoors as a child, especially in our garden, helping look after the plants and flowers. I also loved spending time with animals, we had dogs and cats at home, so that was a big part of my childhood too.",
        b7: "As a kid, I spent most of my free time outdoors, honestly, especially in the garden, helping look after the plants and flowers even from a young age. Animals were a big part of it too, we had dogs and cats around the house, and I think looking after them, along with the garden, taught me a certain kind of patience and responsibility fairly early on, without me even realizing it at the time."
    },
    {
        id: 73,
        question: "Do you think it is better for children to grow up in the city or in the countryside?",
        b6: "I think the countryside is better for children because there is more open space and nature. But the city has better schools, so both have some advantages.",
        b65: "I'd lean toward the countryside, personally, mainly because of the open space, nature, and safety. That said, cities do offer better educational and extracurricular opportunities, so honestly, I think an ideal childhood might combine both somehow.",
        b7: "Honestly, I'd lean toward the countryside, or somewhere in between, if I had to choose, mainly because of the exposure to nature, more freedom to be outdoors, and generally a safer, closer-knit environment. That said, I can't ignore that cities usually offer better schools and more varied opportunities, so I don't think it's a clean either-or answer, really the ideal, if it existed, would probably combine the openness of the countryside with the resources of a city."
    },
    {
        id: 74,
        question: "Do you usually celebrate your birthdays?",
        b6: "Not in a big way, usually. I might have a small celebration with family, but I don't organize a big party every year.",
        b65: "Not really in a big way, no. It's usually a fairly low-key thing, maybe a small gathering with family, or my parents cook something special, but I've never been someone who needs a big party to feel celebrated.",
        b7: "Not really, no, not in a big, elaborate way anyway. It tends to be pretty low-key, family, a nice home-cooked meal, maybe a small treat, that's usually enough for me. I've just never been someone who needs a huge celebration to feel like the day matters, if anything, the quieter, more personal version means more to me."
    },
    {
        id: 75,
        question: "How did you celebrate your last birthday?",
        b6: "Last year, I had a simple celebration at home with my family. We had a nice meal together, and it was a relaxed day.",
        b65: "My last birthday was fairly simple, actually, I spent it at home with family, we had a nice meal together, and a few relatives called to wish me well. Nothing extravagant, but it was a nice, relaxed day overall.",
        b7: "Honestly, my last birthday was pretty low-key, I spent most of it at home with family, we had a nice meal together, and a few relatives called throughout the day to wish me well. It wasn't anything extravagant, but there was something genuinely nice about just having a relaxed day surrounded by people who care about you, rather than feeling pressure to make it some big event."
    },
    {
        id: 76,
        question: "Which birthdays are the most important ones in your country?",
        b6: "I think 18th birthday is important because you become an adult. Other than that, birthdays are not usually celebrated in a very special way based on age here.",
        b65: "I'd say turning 18 is probably seen as significant, since that's when you're legally considered an adult. Beyond that, though, I don't think Bangladeshi culture places huge emphasis on specific milestone birthdays the way some other countries do.",
        b7: "Turning 18 is probably the one that carries the most weight, since that's the legal marker of adulthood here. Beyond that, though, I don't think we have quite the same culture of milestone birthdays, like 16th or 21st birthdays in some Western countries, it's more that each birthday is treated fairly similarly, a nice family occasion rather than something tied to a specific, symbolically important age."
    },
    {
        id: 77,
        question: "Do you think children should celebrate their birthdays with a party?",
        b6: "Yes, I think it's nice for children to have a small party. It makes them happy and they can spend time with friends.",
        b65: "Yes, I think it can be a nice thing for children, a small party gives them something to look forward to, and it's a good chance to spend time with friends and family in a fun setting.",
        b7: "Yes, I'd say so, within reason, at least. A small party gives children something to genuinely look forward to, and it's a good social experience too, spending time with friends, learning to share, that kind of thing. That said, I don't think it needs to be extravagant, kids don't really need anything elaborate to feel special, sometimes a simple gathering with people who care about them means just as much."
    },
    {
        id: 78,
        question: "Are clothes important to you?",
        b6: "Not extremely important, but I do like to dress neatly. I prefer simple, comfortable clothes rather than expensive or fashionable ones.",
        b65: "Not hugely, no, though I do care about looking neat and presentable. I've never really been someone who chases fashion trends, I just prefer simple, comfortable clothing that suits the occasion.",
        b7: "Not massively, if I'm honest, though I do care about looking neat and presentable, especially for things like college or family occasions. I've just never really been someone who chases trends or spends a lot on fashion, I'd rather put that time and money into other things, gardening supplies, books, that kind of thing, so for me clothing is more functional than something I'm deeply invested in."
    },
    {
        id: 79,
        question: "What kind of clothes do you usually wear?",
        b6: "I usually wear simple, casual clothes, like shirts and trousers, or panjabi for special occasions. I prefer comfort over style.",
        b65: "Day to day, I mostly wear casual clothes, shirts, trousers, that kind of thing, and I switch to a panjabi for religious or family occasions. Comfort is really my main priority when choosing what to wear.",
        b7: "On a normal day, it's pretty casual, shirts and trousers mostly, comfortable and practical for college. For religious occasions or family events, though, I'll wear a panjabi, which feels more appropriate and, honestly, more meaningful for those moments. Overall, comfort and practicality matter to me a lot more than looking particularly stylish."
    },
    {
        id: 80,
        question: "Do you ever wear the traditional clothes of your country?",
        b6: "Yes, I wear panjabi, especially during Eid or other religious occasions. It's a traditional clothing in Bangladesh.",
        b65: "Yes, definitely, I wear a panjabi fairly often, especially during Eid, Friday prayers, or other religious and family occasions. It feels like an important part of our culture, so I actually enjoy wearing it.",
        b7: "Yes, quite regularly, actually, a panjabi mainly, especially for Eid, Friday prayers, or family gatherings. It's not just about tradition for me, either, there's something genuinely comfortable and meaningful about wearing it, like it connects me to something bigger than just an outfit, our culture and religion, really."
    },
    {
        id: 81,
        question: "Where do you usually buy your clothes?",
        b6: "I usually buy clothes from local markets or shops in my area. Sometimes I buy from bigger shopping malls in Dhaka too.",
        b65: "I mostly buy clothes from local shops or markets, they're convenient and reasonably priced. Occasionally, I'll go to a bigger shopping mall in Dhaka if I'm looking for something specific.",
        b7: "Mostly local shops or markets, honestly, they're convenient, reasonably priced, and I don't really need anything fancier for my day-to-day clothes. Every now and then, though, I'll head to a bigger shopping mall in Dhaka, usually for something specific like an Eid outfit or if I need something a bit more formal."
    },
    {
        id: 82,
        question: "Have you ever worn a uniform?",
        b6: "Yes, I wore a uniform during my HSC studies at Noakhali Government College. It was a common shirt and trouser style.",
        b65: "Yes, I did, throughout my HSC years at Noakhali Government College, we had a standard uniform, a shirt and trousers in specific colours. Now that I'm at Dhaka College for my BBA, though, there's no uniform requirement anymore.",
        b7: "Yes, definitely, all through my HSC at Noakhali Government College, we had a standard uniform, shirt and trousers in set colours. It's a bit different now that I'm doing my BBA at Dhaka College, there's no uniform requirement at this level, so it's actually been a bit of an adjustment figuring out what to wear every day instead of just putting on the same thing."
    },
    {
        id: 83,
        question: "Do most people in your country follow fashion?",
        b6: "I think young people, especially in cities, follow fashion trends quite a lot. In villages or smaller towns, people usually wear simpler, more traditional clothes.",
        b65: "I'd say it depends a lot on age and location. Younger people, particularly in cities like Dhaka, tend to follow fashion trends pretty closely, often influenced by social media. In smaller towns and villages, though, people generally stick to simpler, more traditional styles.",
        b7: "It really varies, honestly, mainly by age and location, I'd say. Younger people in cities like Dhaka definitely follow fashion trends pretty closely, and social media plays a huge role in that now, everyone's constantly seeing what's trending. In villages and smaller towns, though, people tend to stick to simpler, more traditional clothing, so there's a fairly clear urban-rural divide when it comes to fashion consciousness here."
    },
    {
        id: 84,
        question: "Do you often use a computer?",
        b6: "Yes, I use a computer or laptop quite often, mainly for my studies. I use it for research, assignments, and sometimes watching educational videos.",
        b65: "Yes, pretty regularly, actually, mostly for academic purposes, research for assignments, writing reports, that kind of thing. I also use it to watch educational content and follow the news sometimes.",
        b7: "Yeah, I'd say I use one fairly regularly, mostly for academic work, research, writing assignments, that sort of thing, but also for keeping up with educational content and news. I try to keep my usage fairly purposeful, though, I'm not someone who's constantly on it for entertainment, it's mostly a tool for learning and staying informed rather than just passing time."
    },
    {
        id: 85,
        question: "How do you usually get online?",
        b6: "I usually use my mobile data or wifi to get online. I use my phone most of the time, but sometimes my laptop too.",
        b65: "Mostly through mobile data or wifi, whichever is more convenient at the time. I use my phone for quick things, but for anything more serious, like assignments or research, I'll switch to my laptop.",
        b7: "Mostly mobile data or wifi, depending on where I am, honestly, whichever's more convenient at the time. For quick things, checking messages, browsing, I'll just use my phone, but for anything that actually requires focus, assignments, research, proper writing, I'll always switch over to my laptop, it's just a lot more practical for serious work."
    },
    {
        id: 86,
        question: "Do you prefer desktops or laptops?",
        b6: "I prefer laptops because they are portable. I can carry it to college or use it anywhere at home, which is more convenient for a student.",
        b65: "Definitely laptops, mainly because of the portability. As a student, I need to carry it to college sometimes, or move around the house, so a desktop just wouldn't be practical for my situation.",
        b7: "Laptops, without a doubt, mainly for the portability, honestly. As a student, I need something I can take to college, work with in the library, or just move around the house with, so a desktop, however powerful it might be, just wouldn't suit my lifestyle right now. Maybe later, if I ever need something more powerful for specific work, I'd consider a desktop too, but for now, flexibility matters more to me."
    },
    {
        id: 87,
        question: "What do you use your computer for?",
        b6: "I use it mainly for studying, like doing research and writing assignments. I also use it to watch educational videos sometimes.",
        b65: "Mainly for academic work, research, writing assignments, preparing presentations, that kind of thing. Besides that, I also use it to watch educational content, follow business news, and occasionally for some light entertainment too.",
        b7: "Mostly for academic purposes, research, assignments, presentations, and so on, but it's also become a pretty central tool for a lot of my personal interests too, following business news, watching educational podcasts, even researching things related to gardening sometimes. So it's really this one device that supports both my studies and the things I'm personally curious about."
    },
    {
        id: 88,
        question: "Do you think it is important to learn how to use a computer?",
        b6: "Yes, definitely. Almost every job now requires computer skills, so it's important for students and workers to learn how to use one.",
        b65: "Yes, absolutely, I'd say it's almost essential nowadays. Nearly every career path requires at least basic computer skills, so not knowing how to use one would really limit someone's opportunities, especially in a field like business.",
        b7: "Yes, absolutely, I'd go as far as saying it's essential these days, not just useful. Practically every career path now requires at least basic computer literacy, so not having those skills would genuinely limit someone's opportunities, especially in a field like mine, where financial software and digital tools are becoming a bigger part of the job every year. I think it's honestly become as fundamental as basic literacy used to be."
    },
    {
        id: 89,
        question: "When do you usually get up in the morning?",
        b6: "I usually get up around 6 or 6:30 for Fajr prayer. After that, I might sleep a bit more or start getting ready for college.",
        b65: "I usually wake up around 6 or 6:30 for Fajr prayer, and depending on how tired I am, I'll either go back to sleep for a short while or just start getting ready for the day.",
        b7: "I usually get up around 6 or 6:30, mainly for Fajr prayer, since that's a fixed part of my routine regardless of how the rest of the day looks. After that, depending on how tired I am or what time my classes start, I'll either grab a bit more sleep or just get straight into getting ready for college."
    },
    {
        id: 90,
        question: "Do you usually have the same routine every day? What is your daily routine?",
        b6: "Mostly yes, on college days. I wake up, pray, go to college, study, and later relax or do gardening if I'm at home. Weekends are a bit more flexible.",
        b65: "On college days, yes, it's fairly consistent, wake up, pray, go to Dhaka College, attend classes, come back and study a bit, and then relax in the evening. Weekends tend to be more flexible, though, especially when I'm back home and can spend time gardening.",
        b7: "On weekdays, yes, it's fairly consistent, up for Fajr, off to Dhaka College, classes, then back to studying or assignments in the afternoon, and some downtime in the evening, maybe watching football or listening to a podcast. Weekends are a lot more flexible, though, especially if I happen to be back home, where I'll usually spend a good chunk of time in the garden, which is honestly the part of my week I look forward to most."
    },
    {
        id: 91,
        question: "Do you ever change your routine?",
        b6: "Yes, sometimes, especially during exams or holidays. My routine changes a lot when I go back home to Noakhali too.",
        b65: "Yes, definitely, my routine shifts quite a bit during exam periods, when I study a lot more, or during holidays, when things get much more relaxed. It also changes completely whenever I go back to Noakhali.",
        b7: "Yes, quite often, actually. During exams, everything shifts toward studying a lot more intensely, and during holidays, it loosens up considerably, much more relaxed, less structured. It changes most, though, whenever I go back to Noakhali, the whole rhythm of the day is different there, more time outdoors, more time with family, so I suppose my routine is really shaped more by circumstance than by any fixed schedule I stick to no matter what."
    },
    {
        id: 92,
        question: "Is your routine the same today as it was when you were a child?",
        b6: "No, it's quite different now. As a child, I spent more time playing outside, but now most of my day is about studying and college.",
        b65: "No, not at all, really. As a child, my day revolved around playing outside, school, and just being with family. Now, it's much more study-focused, since I'm at university and living away from home for most of the year.",
        b7: "No, it's changed quite a lot, honestly. As a kid, my day revolved around playing outside, school, being with family, pretty carefree overall. These days, it's a lot more study-focused and structured, especially since I'm living away from home for university, so there's more independence involved too, managing my own time, my own responsibilities, which obviously wasn't the case back then."
    },
    {
        id: 93,
        question: "Do you think it is important to have a daily routine?",
        b6: "Yes, I think it's important. A routine helps you manage time better and get things done, especially for a student like me.",
        b65: "Yes, definitely, I think a routine is really important. It helps you manage your time efficiently, stay disciplined, and make sure important things, like studying or prayer, don't get neglected.",
        b7: "Yes, absolutely, I'd say a routine is genuinely important, maybe even essential. It helps with time management, obviously, but beyond that, I think it builds discipline, and makes sure the things that actually matter to you, studying, prayer, even hobbies like gardening, don't just get pushed aside by whatever feels urgent in the moment. Without some structure, I think it's really easy to let the important things slide."
    },
    {
        id: 94,
        question: "Do you often have dreams when you sleep?",
        b6: "Yes, I think I dream fairly often, though I don't always notice it. Sometimes they are strange, and sometimes just normal, everyday situations.",
        b65: "Yes, I'd say fairly often, actually, though it really depends on the night. Some dreams are pretty strange and random, while others just seem to reflect ordinary things from my day, like college or family.",
        b7: "Yeah, fairly often, I'd say, though it varies quite a bit from night to night. Some dreams are completely random and a bit bizarre, honestly, while others seem to just replay ordinary things from my day, college, conversations, that sort of thing. I've noticed they tend to be more vivid when I'm stressed about something, exams especially."
    },
    {
        id: 95,
        question: "Do you usually remember your dreams?",
        b6: "Not always, honestly. I remember some dreams clearly right after waking up, but they usually fade quickly during the day.",
        b65: "Not really, no, not in detail anyway. I might remember a dream clearly right when I wake up, but it usually fades pretty fast once I get up and start my day.",
        b7: "Not in much detail, honestly, no. Right when I wake up, I might remember a dream fairly clearly, but it fades surprisingly fast, by the time I've prayed Fajr and started getting ready, it's usually gone completely. I've always found that a bit strange, how something so vivid just moments ago can disappear that quickly."
    },
    {
        id: 96,
        question: "Do you think dreams are important to remember?",
        b6: "I'm not sure, honestly. Some people think dreams have meaning, but I don't think about them too much myself.",
        b65: "I'm not entirely sure, to be honest. Some people believe dreams can reveal something about your subconscious thoughts or worries, but personally, I don't put too much weight on them, I see them more as just random mental activity.",
        b7: "Honestly, I'm not entirely convinced either way. Some people believe dreams reflect your subconscious thoughts, worries, desires, that kind of thing, and there might be something to that, but personally, I don't put a huge amount of weight on them, I tend to see them more as just random mental activity rather than something with deep meaning I need to decode. That said, I can see why some people find it interesting to reflect on them."
    },
    {
        id: 97,
        question: "Do you ever have daydreams?",
        b6: "Yes, sometimes, especially when I'm bored or tired during class. I usually think about my future or my business plans.",
        b65: "Yes, quite often, actually, especially when I'm a bit tired or bored, sometimes even during a lecture. I usually end up thinking about my future, my career plans, that sort of thing.",
        b7: "Yeah, fairly often, honestly, especially when I'm tired or a lecture's dragging on a bit. My mind tends to drift toward my future, my career, what my business might look like someday, or sometimes just simpler things, like being back in my garden at home. It's a nice little mental escape, I suppose."
    },
    {
        id: 98,
        question: "What kind of daydreams do you usually have?",
        b6: "I usually daydream about my future career, like running my own business. Sometimes I also think about my hometown and my garden.",
        b65: "Mostly about my future, actually, what my career might look like, running my own business eventually. Sometimes my mind wanders back to simpler things too, like my garden back home, or just relaxing days in Noakhali.",
        b7: "Mostly future-related, honestly, imagining what my career could look like, running a business, being successful in that sense. But sometimes it swings the other way completely, toward simpler, more nostalgic things, my garden back home, quiet days in Noakhali, that kind of imagery. It's a bit of a contrast, really, ambitious future plans on one hand, and this pull toward a simpler, more peaceful life on the other."
    },
    {
        id: 99,
        question: "Do you spend much time with your family?",
        b6: "Not as much as before, since I moved to Dhaka for my studies. But when I go back home, I try to spend as much time with them as I can.",
        b65: "Not as much as I used to, honestly, since moving to Dhaka has really cut into that time. But whenever I do go back home, I make a real effort to spend quality time with them, rather than just being physically there.",
        b7: "Not nearly as much as before, if I'm honest, since starting university in Dhaka has taken up most of my time and physical presence. But whenever I am back home, I try to make it count, actual quality time, conversations, meals together, rather than just being in the same house while everyone's on their phones. I think that's become more important to me precisely because those visits are less frequent now."
    },
    {
        id: 100,
        question: "Who are you closest to in your family?",
        b6: "I'm closest to my parents, especially since we talk a lot and they support me with everything, like my studies and future plans.",
        b65: "I'd say I'm closest to my parents, honestly, we talk regularly, and they've always been really supportive of my studies and future plans, even now that I'm away in Dhaka.",
        b7: "Probably my parents, if I had to pick, we've always been close, and even now that I'm away in Dhaka, we still talk pretty regularly. They've been consistently supportive of whatever I've wanted to pursue, my studies, my future plans, even smaller things like my interest in gardening, which I think matters more than people realize, having family who genuinely back you rather than just tolerate your choices."
    },
    {
        id: 101,
        question: "Do you prefer spending time with your family or friends?",
        b6: "That's difficult to answer, but I think both are important. Family gives me comfort, while friends give me a different kind of fun and support.",
        b65: "That's a tough one, honestly, since both matter to me in different ways. Family gives me a sense of comfort and stability, while friends offer more of an easy-going, relaxed kind of connection, so I don't think I could really choose one over the other.",
        b7: "Honestly, that's a genuinely hard one to answer, because they give me such different things. Family provides this sense of comfort and stability, unconditional support, in a way, whereas friends offer something more relaxed and easy-going, a space to just be myself without expectations. So it's less about preferring one and more about needing both for different reasons, family grounds me, friends recharge me, if that makes sense."
    },
    {
        id: 102,
        question: "Who is your best friend?",
        b6: "My best friend is Aryan. We've known each other since childhood and grew up in the same area.",
        b65: "My best friend is Aryan, we've known each other since we were kids and grew up in the same neighbourhood, so we go back a long way.",
        b7: "That'd be Aryan, we go back a long way, basically our whole childhood, growing up in the same neighbourhood. He's studying Law now while I'm doing Accounting, but that's never really gotten in the way of the friendship."
    },
    {
        id: 103,
        question: "Are you still friends with people from your childhood?",
        b6: "Yes, a few, especially Aryan, my best friend. We still keep in touch even though we're both busy with our studies now.",
        b65: "Yes, a few, definitely, Aryan especially, since he's still my closest friend. There are a couple of others too, though we've drifted apart a bit as everyone's gotten busier with their own lives and studies.",
        b7: "Yes, a handful, honestly, Aryan being the main one, he's still probably my closest friend. There are a couple of others I'll occasionally message or bump into during holidays, though we've naturally drifted apart a bit as everyone's gone their own way with studies and careers, that's just kind of inevitable, I think, as you grow older and life gets busier."
    },
    {
        id: 104,
        question: "Is family important in your country?",
        b6: "Yes, family is very important in Bangladesh. People usually stay close to their families, and family decisions are often made together.",
        b65: "Yes, extremely important, actually. In Bangladesh, family tends to be at the centre of most people's lives, decisions are often made collectively, and there's a strong expectation to support and stay close to your parents, even as an adult.",
        b7: "Yes, hugely important, I'd say, arguably more central here than in a lot of other cultures. Family tends to be at the core of most people's lives in Bangladesh, decisions, whether it's education, marriage, or even career choices, are rarely made in isolation, and there's a strong cultural expectation that you'll stay close to and support your parents, even well into adulthood, which I think reflects a broader value we place on interdependence rather than pure individual independence."
    },
    {
        id: 105,
        question: "Do you like flowers?",
        b6: "Yes, I like flowers a lot. I grow different kinds of flowers in my garden at home, so it's a big part of my hobby.",
        b65: "Yes, definitely, I really like flowers, actually. Gardening is one of my main hobbies, so growing and taking care of flowers is something I genuinely enjoy, not just appreciating them from a distance.",
        b7: "Yes, genuinely, quite a lot, actually. Gardening's one of my main hobbies, so it's not just that I appreciate flowers from a distance, I actually spend a good amount of time growing and taking care of them myself, which makes the whole thing feel a lot more personal, watching something you've planted actually bloom is genuinely satisfying in a way that's hard to explain."
    },
    {
        id: 106,
        question: "What's your favourite flower?",
        b6: "My favourite flower is Bokul. I like it because of its soft fragrance and simple beauty.",
        b65: "My favourite flower is Bokul, definitely. I really love its soft, gentle fragrance, and there's something about its simple, understated beauty that I find more appealing than flashier, more colourful flowers.",
        b7: "It's Bokul, without a doubt. What I love most about it is that soft, gentle fragrance, it's subtle, not overpowering at all, and there's a kind of simple, understated beauty to it that I actually find more appealing than some of the flashier, more colourful flowers people often go for. It's also got a nostalgic quality to it for me, since it reminds me of home."
    },
    {
        id: 107,
        question: "When was the last time you gave someone flowers?",
        b6: "Honestly, I don't remember exactly, it's not something I do very often. Maybe I gave some flowers from my garden to a family member once.",
        b65: "To be honest, I can't quite remember an exact time, giving flowers isn't something I do that regularly. I might have shared some flowers I grew myself with a family member or neighbour at some point, though.",
        b7: "Honestly, I can't recall a specific moment, giving flowers as a gift isn't really something I do often. That said, I have shared flowers I've grown myself with family or neighbours occasionally, it feels a bit different when it's something you've actually grown yourself rather than just bought, more meaningful in a way, even if it wasn't a formal 'giving flowers' occasion exactly."
    },
    {
        id: 108,
        question: "Do any flowers have a special meaning in your country?",
        b6: "Yes, I think so. Some flowers, like the water lily, are considered our national flower and have cultural importance.",
        b65: "Yes, definitely, the water lily, or Shapla, is actually our national flower and holds real cultural significance, it even appears on national symbols. Other flowers, like marigolds, are also commonly used in festivals and religious occasions.",
        b7: "Yes, quite a few, actually. The Shapla, or water lily, is our national flower, and it carries real symbolic weight, it's even part of our national emblem. Beyond that, flowers like marigolds show up a lot in festivals and religious ceremonies, and even something like Bokul carries a certain nostalgic, almost poetic association in Bengali culture and literature, it's referenced quite often in songs and poems, actually."
    },
    {
        id: 109,
        question: "Why do you think women like flowers more than men?",
        b6: "I'm not sure that's completely true, but maybe it's because of how society raises boys and girls differently, and flowers are seen as more feminine in many cultures.",
        b65: "Honestly, I'm not sure I'd fully agree with that assumption, it might just be more of a social perception than a real difference. If there is a pattern, though, it's probably more about how society traditionally associates flowers with femininity, rather than any real difference in appreciation.",
        b7: "Honestly, I'm not sure that premise is entirely accurate, to begin with, it might say more about social conditioning than any genuine difference in appreciation. If there is a visible pattern, I'd guess it comes down to how flowers have traditionally been marketed and associated with femininity in a lot of cultures, gifting flowers to women, flowers as 'delicate' or 'feminine' symbols, rather than men genuinely caring less about them. Personally, I quite like flowers myself, so I'm probably not the best example of that assumption anyway."
    },
    {
        id: 110,
        question: "What's your favourite food?",
        b6: "I really like seafood, especially fish and shrimp. I also enjoy traditional Bangladeshi pitha, especially during winter.",
        b65: "I'd say seafood is probably my favourite, fish and shrimp especially, since they're such a big part of local Bangladeshi cooking. I'm also a big fan of pitha, particularly in winter, when families usually make it fresh at home.",
        b7: "Probably seafood, if I had to pick, fish and shrimp especially, they're such a central part of local Bangladeshi cuisine, and I've grown up eating them prepared in all sorts of ways. I'm also a huge fan of pitha, particularly in winter, there's something about freshly made pitha at home that a shop-bought version just can't replicate, it's tied to family and tradition in a way that makes it taste even better, if that makes sense."
    },
    {
        id: 111,
        question: "Have you always liked the same food?",
        b6: "Not exactly. My taste has changed a bit as I've grown up. I used to avoid some vegetables, but now I enjoy them more.",
        b65: "Not entirely, no, my taste has definitely shifted a bit over the years. As a kid, I was a lot pickier, especially with vegetables, but now I actually enjoy a much wider range of food than I used to.",
        b7: "Not entirely, honestly, my taste has shifted quite a bit as I've gotten older. As a kid, I was noticeably pickier, vegetables especially, I used to avoid a lot of them, but now I actually appreciate a much wider range of food, including things I wouldn't have touched back then. I think that's just a fairly normal part of growing up, your palate matures along with everything else."
    },
    {
        id: 112,
        question: "Is there any food you dislike?",
        b6: "I'm not a big fan of very oily or heavy fast food. I prefer fresh, homemade meals instead.",
        b65: "I'm not really a fan of very oily or overly heavy fast food, to be honest. I much prefer fresh, homemade meals, they just feel healthier and more satisfying to me.",
        b7: "Honestly, I'm not really drawn to heavy, oily fast food, it's not that I never eat it, just that I don't particularly enjoy it. I much prefer fresh, homemade meals, they feel healthier, and honestly just more satisfying in general, there's a kind of freshness and care in home cooking that fast food never quite matches for me."
    },
    {
        id: 113,
        question: "What is a common meal in your country?",
        b6: "Rice and fish curry is a very common meal in Bangladesh. Vegetables and lentils, or dal, are also usually included.",
        b65: "A very typical meal here would be rice with fish curry, alongside some vegetables and dal, or lentils. It's a fairly standard combination that most families eat regularly, especially for lunch or dinner.",
        b7: "A pretty typical meal here would be rice, paired with a fish curry, some vegetables, and dal, or lentils, on the side. It's a combination most Bangladeshi families eat pretty regularly, especially for lunch or dinner, rice and fish in particular are so central to the culture that there's actually a well-known saying, 'mache bhate bangali,' which basically means fish and rice define what it is to be Bengali."
    },
    {
        id: 114,
        question: "Do you have a healthy diet?",
        b6: "I think it's fairly healthy. I eat a lot of fish, vegetables, and fruits, though I do enjoy pitha sometimes too, which is a bit less healthy.",
        b65: "I'd say it's reasonably healthy overall. I eat quite a lot of fish, vegetables, and fruits, though I do allow myself the occasional treat, like pitha, which isn't the healthiest but is definitely worth it.",
        b7: "I'd say it's fairly healthy overall, honestly, plenty of fish, vegetables, and fruit, which I think is a natural benefit of growing up somewhere with good access to fresh, local produce. That said, I'm not overly strict about it either, I'll happily have pitha or something a bit heavier occasionally, I don't think being too rigid about food is realistic or even particularly healthy, mentally at least."
    },
    {
        id: 115,
        question: "What do you think of fast food?",
        b6: "I don't eat it very often. I think it's convenient but not very healthy, so I prefer homemade food most of the time.",
        b65: "I'm not really a big fan, to be honest. It's convenient, sure, and fine occasionally, but I don't think it's particularly healthy, so I'd much rather go for homemade food most of the time.",
        b7: "Honestly, I'm not particularly drawn to it. I get why it's popular, it's fast, convenient, and satisfies cravings quickly, but I don't think it's great for you if you're eating it regularly, all that oil and processed ingredients add up over time. I'd much rather have homemade food most days and maybe treat myself to something like that occasionally, rather than making it a habit."
    },
    {
        id: 116,
        question: "Do you often go out in the evenings?",
        b6: "Not very often, honestly. I usually stay in and study, though I sometimes go out with friends or for a walk.",
        b65: "Not that often, to be honest, most evenings I'm studying or just relaxing at home. That said, I'll occasionally go out, maybe grab food with friends or just take a walk to clear my head.",
        b7: "Not that often, honestly, most evenings I'm either studying or just winding down at home. That said, I'll occasionally head out, grab food with a friend, or just take a walk, especially if I've been stuck indoors all day and need a bit of fresh air to clear my head before getting back to work."
    },
    {
        id: 117,
        question: "What do you like to do when you go out?",
        b6: "I usually like to eat somewhere or just walk around and talk with friends. Sometimes I also enjoy watching a football match at a local place.",
        b65: "I usually like grabbing food somewhere, or just walking around and chatting with friends. Sometimes, if there's a big football match on, especially involving Argentina, I'll head out to watch it somewhere with a good atmosphere.",
        b7: "Mostly just grabbing food and chatting with friends, honestly, nothing too planned. But if there's a big match on, Argentina playing especially, I'll definitely head out to watch it somewhere with a proper atmosphere, a crowd, some noise, that sort of thing, since watching alone just doesn't have the same energy to it."
    },
    {
        id: 118,
        question: "Do you prefer going out alone or with friends?",
        b6: "I prefer going out with friends most of the time. It's more fun, and we can talk and share the experience together.",
        b65: "Mostly with friends, I'd say, it's just more enjoyable, being able to talk and share the experience makes it feel more worthwhile. That said, I don't mind going out alone occasionally, sometimes it's nice to just think and relax by myself.",
        b7: "Mostly with friends, honestly, it just makes the experience more enjoyable, having someone to talk to and share things with. That said, I don't mind going out alone occasionally either, there's something valuable about that kind of quiet time too, just walking somewhere by myself, thinking things through, so I suppose it really depends on what I'm looking for at the time, connection or just some space to myself."
    },
    {
        id: 119,
        question: "How often do you go out on weekends?",
        b6: "It varies, but usually once or twice. Sometimes I stay in and rest, especially if I've been busy all week with studies.",
        b65: "It really varies week to week, honestly, maybe once or twice on a typical weekend. If I've had a particularly busy week with studies, though, I might just prefer to stay in and rest instead.",
        b7: "It varies quite a bit, honestly, maybe once or twice on an average weekend, but it really depends on how the week's gone. If it's been particularly demanding, exam prep or heavy assignments, I'll often just stay in and rest instead, recovering feels more important at that point than going out for the sake of it."
    },
    {
        id: 120,
        question: "Do you think it's important for people to go out?",
        b6: "Yes, I think it's important. Going out helps people relax and socialize, which is good for mental health.",
        b65: "Yes, definitely, I think it's genuinely important. It gives people a chance to socialize and relax outside of their usual routine, which I think has a real positive impact on mental well-being.",
        b7: "Yes, absolutely, I'd say it's genuinely important, even essential for most people. Going out gives you a break from routine, a chance to socialize, and honestly, I think that kind of social interaction and change of scenery does a lot more for mental well-being than people sometimes give it credit for, especially for students, who can easily get stuck in a cycle of just studying and staying indoors if they're not careful."
    },
    {
        id: 121,
        question: "What makes you happy?",
        b6: "Spending time with family makes me happy, and also gardening. Seeing my plants grow well gives me a lot of satisfaction.",
        b65: "A few things, really, spending quality time with family, gardening, watching my plants grow and bloom, and also making progress toward my goals, like doing well in my studies.",
        b7: "A few different things, honestly. Spending genuine time with family is a big one, and gardening too, there's something quietly satisfying about watching something you've planted actually grow and bloom. Beyond that, I think making real progress toward my goals, doing well academically, moving closer to my future plans, gives me a different, more long-term kind of happiness, alongside the smaller, everyday stuff."
    },
    {
        id: 122,
        question: "What do you do to stay happy?",
        b6: "I try to spend time in my garden and stay connected with family and friends. I also try to stay positive about my studies.",
        b65: "I try to make time for things I enjoy, gardening especially, and staying connected with family and friends, even when I'm busy. I also try to keep a positive mindset about my studies and future, rather than getting too stressed.",
        b7: "A few things, really. I try to make time for gardening when I can, even if it's just a little, and I make an effort to stay connected with family and friends, even during busy periods, since isolating myself never really helps. I also try to keep a fairly positive, forward-looking mindset about my studies and future in general, rather than getting caught up in stress over every little setback."
    },
    {
        id: 123,
        question: "Does your happiness change with time?",
        b6: "Yes, I think so. What made me happy as a child, like playing outside, is different from what makes me happy now, like achieving goals.",
        b65: "Yes, definitely, I think it evolves quite naturally. As a child, simple things like playing outside made me happy, but now it's more about things like personal growth, achievements, and meaningful relationships.",
        b7: "Yes, definitely, I think it evolves quite naturally as you grow, and that seems pretty normal to me. As a kid, happiness was simple, playing outside, small things, but now it's shifted toward things like personal growth, working toward goals, and meaningful relationships. I'd guess it'll probably keep shifting too, maybe toward things like family or a sense of contribution as I get older, so I don't really see happiness as fixed, more like something that keeps adapting to whatever stage of life you're in."
    },
    {
        id: 124,
        question: "What was the happiest moment in your life?",
        b6: "I think one of the happiest moments was when I got admitted to Dhaka College. I felt really proud, and my family was happy too.",
        b65: "Probably when I got admitted to Dhaka College, honestly, it felt like a real achievement after finishing HSC, and seeing how proud my family was made it even more meaningful.",
        b7: "Probably when I found out I'd been admitted to Dhaka College, if I had to pick one moment. It wasn't just the achievement itself, honestly, it was seeing how genuinely proud my parents were, after all the effort during HSC, that moment felt like it validated a lot of hard work, not just mine, but theirs too, in supporting me. That combination, personal achievement and shared family pride, is probably what made it stand out so much."
    },
    {
        id: 125,
        question: "Do you think money brings happiness?",
        b6: "I think money helps a little, since it removes some stress, but I don't think it's the main reason for happiness. Family and personal goals matter more, I think.",
        b65: "I think money helps to a certain extent, it definitely reduces stress and gives you more options, but I don't think it's the main source of happiness. Things like family, relationships, and personal fulfillment probably matter more in the long run.",
        b7: "I think money helps, up to a point, it definitely takes away certain stresses and opens up more options in life, so it's not irrelevant at all. But I don't think it's the main driver of happiness, beyond covering your basic needs and giving you some security, I think things like relationships, purpose, and personal growth matter a lot more in the long run. That said, I'll admit it's easy to say that when you're not actually struggling financially, so I try not to be too dismissive of how much money can matter for someone in a different situation."
    },
    {
        id: 126,
        question: "Do you have a hobby?",
        b6: "Yes, my main hobby is gardening. I enjoy growing flowers and fruit trees at home.",
        b65: "Yes, definitely, gardening is my main hobby, I really enjoy growing flowers and fruit trees. I'm also quite interested in animals and birds, I keep a few pet birds too.",
        b7: "Yes, gardening's my main one, definitely, I really love growing flowers and fruit trees, it's been a big part of my life since childhood. Alongside that, I'm also pretty into animals and birds, I keep a few pet birds at home, and I follow football too, Argentina and Messi especially, so between those, it keeps me fairly occupied outside of studying."
    },
    {
        id: 127,
        question: "What equipment do you need for it?",
        b6: "For gardening, I need basic tools like a spade, watering can, and some seeds or plants. It's not very expensive equipment.",
        b65: "For gardening, the basics are enough really, a spade, a watering can, some good soil, and seeds or saplings. It's not particularly expensive equipment, which is one of the things I like about it.",
        b7: "For gardening, honestly, you don't need much, the basics cover most of it, a spade, a watering can, decent soil, and seeds or saplings to start with. That's actually part of what I like about it, it's not an expensive hobby at all, unlike some others, you don't need fancy equipment to get started, just some patience and a bit of consistent effort."
    },
    {
        id: 128,
        question: "Do you think hobbies should be shared with other people?",
        b6: "I think it can be nice to share hobbies sometimes, but it's also fine to enjoy them alone. It depends on the person and the hobby.",
        b65: "I think it depends, honestly. Some hobbies, like gardening, can be quite enjoyable done alone, it's almost meditative in a way. But sharing a hobby with others, like watching football with friends, definitely adds a different kind of enjoyment, more social and lively.",
        b7: "Honestly, I think it depends a lot on the hobby and even the mood you're in. Something like gardening, for me, is often better done alone, it's almost meditative, a bit of quiet time to just focus and think. But something like watching a football match, I'd much rather have people around, the shared excitement is basically the whole point. So I suppose I don't have one fixed preference, it's more that different activities naturally call for different company, or none at all."
    },
    {
        id: 129,
        question: "Did you have a hobby as a child?",
        b6: "Yes, I think I started gardening even as a child, helping my parents in our garden. I also enjoyed playing with animals.",
        b65: "Yes, actually, I think gardening started quite early for me, helping my parents out in the garden as a kid. I also really enjoyed being around animals, we had pets at home even back then.",
        b7: "Yes, actually, gardening goes back pretty far for me, I was helping my parents out in the garden even as a young kid, so it's not really a hobby I picked up recently, it's been with me most of my life. Animals were a big part of it too, we always had pets around, so between the two, I think my childhood hobbies were pretty consistently focused on nature and living things, which has carried through to who I am now, honestly."
    },
    {
        id: 130,
        question: "What hobbies are popular in your country?",
        b6: "Cricket and football are very popular in Bangladesh. Many people also enjoy gardening or fishing, especially in villages.",
        b65: "Cricket and football are probably the most popular, especially among younger people, they're followed passionately here. In villages and smaller towns, things like gardening and fishing are also pretty common pastimes.",
        b7: "Cricket and football would be the big ones, honestly, they're followed with a genuine passion here, especially among younger people, and Bangladesh even has its own national cricket team that people follow closely. In villages and smaller towns, though, more traditional pastimes like gardening, fishing, or keeping livestock are also pretty common, so there's a bit of a divide between more modern, sport-focused hobbies in cities and these more traditional, land-based ones elsewhere."
    },
    {
        id: 131,
        question: "Why do you think people have hobbies?",
        b6: "I think people have hobbies to relax and enjoy their free time. It also gives them something interesting to focus on outside of work or study.",
        b65: "I think hobbies mainly give people a way to relax and recharge outside of work or studies. They also give a sense of purpose or achievement in something that isn't tied to academic or career pressure.",
        b7: "I think hobbies serve a few different purposes, honestly. Partly it's about relaxation, giving your mind a break from work or studies. But I also think they give people a sense of purpose or achievement that's separate from academic or career pressure, something you're doing purely because you want to, not because you have to. For me personally, gardening does exactly that, it's satisfying in a way that's completely disconnected from grades or career progress, which I think is genuinely valuable."
    },
    {
        id: 132,
        question: "How often do you go online?",
        b6: "Very often, actually, probably every day. I use the internet for studying, research, and staying in touch with family and friends.",
        b65: "Pretty much every day, honestly, it's hard to avoid it these days. Mostly for studying and research, but also for keeping in touch with family and following the news.",
        b7: "Pretty much every day, honestly, it'd be hard to get through university without it at this point. It's mostly for studying and research, but also for staying in touch with family back home and following news and educational content. I do try to be a bit mindful about it, though, not just endlessly scrolling, but using it with some actual purpose."
    },
    {
        id: 135,
        question: "Do you have your own computer?",
        b6: "Yes, I have my own laptop. I use it mainly for my studies and assignments.",
        b65: "Yes, I do, I have my own laptop, which I mostly use for studying, assignments, and research, it's pretty essential for university life at this point.",
        b7: "Yes, I have my own laptop, and honestly, it's become pretty essential at this point, university life would be a lot harder without it, assignments, research, presentations, all of that runs through it. I don't share it with anyone, which I appreciate, since I can keep my study materials and files organized exactly the way I want."
    },
    {
        id: 136,
        question: "What's your favourite website?",
        b6: "I don't have one specific favourite, but I often use YouTube for educational videos and research purposes.",
        b65: "I don't think I have just one favourite, honestly, but I use YouTube a lot, mostly for educational content and research, it's pretty useful for that.",
        b7: "I wouldn't say I have just one favourite, honestly, but I probably spend the most time on YouTube, mostly for educational content, podcasts, and research related to my studies or business interests. It's not really about entertainment for me there, more just a resource I use fairly consistently."
    },
    {
        id: 137,
        question: "Do you think children should be allowed unsupervised access to the internet?",
        b6: "No, I don't think so. Children should have some supervision because there is a lot of inappropriate or harmful content online.",
        b65: "No, I don't think so, honestly. There's a lot of content online that isn't appropriate for children, so some level of supervision or parental control seems necessary, at least until they're a bit older.",
        b7: "No, I don't think so, not fully unsupervised anyway. There's just too much content out there that isn't appropriate for children, and honestly, kids that age aren't always equipped to judge what's safe or trustworthy online. That said, I don't think total restriction is the answer either, it's probably more about guided access, letting them use the internet, but with some parental involvement and clear boundaries, rather than either extreme."
    },
    {
        id: 138,
        question: "What do you usually do in your leisure time?",
        b6: "I usually spend my leisure time gardening, watching football, or listening to podcasts. Sometimes I also spend time with friends.",
        b65: "In my leisure time, I usually go for gardening if I'm home, or I'll watch football, listen to educational podcasts, or just relax with friends, depending on the day.",
        b7: "It really depends on where I am and how much time I've got, honestly. If I'm back home, gardening's usually my go-to, but during term time in Dhaka, it's more likely to be watching a football match, listening to an educational podcast, or just hanging out with friends. So it's a mix, really, some of it active and hands-on, some of it more passive and relaxing."
    },
    {
        id: 139,
        question: "Do you prefer to spend your free time alone or with others?",
        b6: "I think it depends on my mood. Sometimes I like being alone, like when gardening, but I also enjoy free time with friends.",
        b65: "Honestly, it depends on my mood and what I'm doing. Gardening, for example, I generally prefer alone, it's quite peaceful. But for things like watching football, I definitely prefer company, it's more fun with others.",
        b7: "Honestly, it really depends on the activity and my mood at the time. Something like gardening, I almost always prefer alone, there's a certain peace to it that company would actually disrupt. But something like watching a football match, I'd much rather have people around, the shared excitement is basically the whole point. So I suppose I don't have one fixed preference, it's more that different activities naturally call for different company, or none at all."
    },
    {
        id: 140,
        question: "What did you enjoy doing in your free time when you were a child?",
        b6: "I enjoyed playing outside, gardening with my parents, and spending time with pets. It was a simple and happy time.",
        b65: "As a child, I really enjoyed being outdoors, playing with friends, helping in the garden, and spending time with our pets. It was a pretty simple, happy time overall.",
        b7: "As a kid, I spent most of my free time outdoors, honestly, playing with neighbourhood friends, helping out in the garden, and just being around our pets. Looking back, it was a fairly simple, happy time, and I think a lot of what I still enjoy now, gardening especially, actually traces directly back to those years."
    },
    {
        id: 141,
        question: "Do you have enough leisure time now?",
        b6: "Not really, honestly. University takes up most of my time, so I don't have as much leisure time as before.",
        b65: "Not really, no, not as much as I'd like, university keeps me pretty busy. I do try to make time for gardening or football when I can, but it's definitely less than before.",
        b7: "Honestly, not as much as I'd like, no, university keeps me pretty occupied, between classes, assignments, and everything else. I do try to carve out time for gardening or football when I can, even if it's brief, but it's definitely a lot less than I had before starting university, that adjustment's probably the biggest change in my day-to-day life recently."
    },
    {
        id: 143,
        question: "Do you like music?",
        b6: "Yes, I like music, especially Islamic music and ghazals. I don't listen to mainstream music that much.",
        b65: "Yes, I do, though my taste is probably a bit different from most people my age. I mostly listen to Islamic music and ghazals rather than mainstream pop or anything like that.",
        b7: "Yes, definitely, though my taste probably isn't what people expect, I mostly listen to Islamic music and ghazals rather than mainstream pop or anything trending. There's something calming and reflective about that kind of music that I find a lot more satisfying than typical chart music, it feels more meaningful to me, honestly, rather than just background noise."
    },
    {
        id: 144,
        question: "What's your favourite type of music?",
        b6: "I really like ghazals and Islamic music. I find them peaceful and meaningful, unlike some louder types of music.",
        b65: "Ghazals and Islamic music, definitely, they're the types I go back to the most. I find them a lot more peaceful and meaningful compared to louder, more upbeat genres.",
        b7: "Ghazals and Islamic music, without a doubt, they're what I keep coming back to. There's a certain depth to the lyrics, often about faith, love, or reflection, that I find genuinely moving, and the music itself tends to be calmer, more melodic, rather than loud or overproduced, which suits my personality a lot better than more high-energy genres."
    },
    {
        id: 145,
        question: "Can you sing?",
        b6: "Not really, no. I'm not very good at singing, though I enjoy listening to music a lot.",
        b65: "Not really, honestly, singing has never been one of my strengths. I much prefer listening to music rather than performing it myself.",
        b7: "Not really, no, if I'm honest, singing has never been something I was particularly good at, even casually. I'm much more of a listener than a performer when it comes to music, I appreciate it deeply, but creating it myself just isn't where my skills lie."
    },
    {
        id: 146,
        question: "Did you learn music at school when you were a child?",
        b6: "We had some basic music classes at school, but I wasn't particularly interested in them at the time.",
        b65: "We did have some basic music classes as part of school, though I wasn't particularly drawn to them at the time, my interests were more focused elsewhere, gardening and sports mostly.",
        b7: "We did have some basic music classes as part of the curriculum, though I wasn't particularly drawn to them, honestly, my interests were focused elsewhere at the time, gardening and sports mostly. Looking back, I don't regret it exactly, but I do sometimes wonder what it would've been like if I'd taken it more seriously back then."
    },
    {
        id: 147,
        question: "If you could learn a musical instrument, what would it be?",
        b6: "I think I would like to learn the harmonium, since it's often used in ghazals and Islamic music, which I enjoy.",
        b65: "Probably the harmonium, actually, since it's commonly used in ghazals and Islamic devotional music, which is the kind of music I'm drawn to most.",
        b7: "Probably the harmonium, if I had to pick, mainly because it's so central to the kind of music I actually enjoy, ghazals, Islamic devotional pieces, that sort of thing. It'd feel more meaningful to me than learning something more generic like guitar or piano, since it'd connect directly to music I already have a genuine emotional attachment to."
    },
    {
        id: 148,
        question: "Do you think music is important?",
        b6: "Yes, I think music is important. It can help people relax and express their feelings in different ways.",
        b65: "Yes, definitely, I think music plays an important role for a lot of people, it helps with relaxation, emotional expression, and even connecting with others culturally or spiritually.",
        b7: "Yes, absolutely, I'd say it's genuinely important, even if my own relationship with it is a bit different from most people's. It helps with relaxation and emotional expression, obviously, but for me personally, music like ghazals and Islamic devotional pieces also connects to something spiritual, it's not purely entertainment, there's a reflective, almost meditative quality to it that goes beyond just enjoyment."
    },
    {
        id: 149,
        question: "Do you like your neighbours?",
        b6: "Yes, I like my neighbours in Noakhali. They are friendly and helpful, and we know each other well.",
        b65: "Yes, definitely, back home in Noakhali, our neighbours are friendly and genuinely helpful, we've known each other for years, so there's a real sense of familiarity and trust.",
        b7: "Yes, definitely, back home in Noakhali especially, our neighbours are genuinely friendly and helpful, we've known each other for years, so there's a real sense of trust and familiarity there. In Dhaka, it's a bit different, honestly, everyone's busier and more private, so I don't know my neighbours nearly as well, which I think is just a natural feature of city life rather than anything negative about the people themselves."
    },
    {
        id: 150,
        question: "Are neighbours usually close to each other in your country?",
        b6: "In villages and smaller towns, yes, neighbours are usually close and know each other well. In big cities, it's less common.",
        b65: "In villages and smaller towns, definitely, neighbours tend to be quite close, almost like extended family in some cases. In big cities like Dhaka, though, people are generally busier and more private, so that closeness isn't as common.",
        b7: "In villages and smaller towns, definitely, neighbours tend to be genuinely close, almost like extended family in a lot of cases, people look out for each other, share things, know each other's business, in a good way. In big cities like Dhaka, though, that closeness tends to fade a bit, people are busier, more private, so relationships with neighbours are often more polite but distant, rather than the deep familiarity you get in a smaller place."
    },
    {
        id: 152,
        question: "Do you think your neighbourhood is a good place for children?",
        b6: "Yes, I think so, especially back home, since the neighbours are friendly and look out for each other's children too.",
        b65: "Yes, definitely, back home at least, the neighbours are friendly and genuinely look out for each other's children, which adds an extra layer of safety beyond just the family itself.",
        b7: "Yes, definitely, back home in Noakhali at least, the neighbours genuinely look out for each other's children, so there's this extra layer of safety and care that goes beyond just what parents alone can provide. In Dhaka, honestly, that dynamic is a lot weaker, people are more private, so children probably don't get that same sense of a whole community watching out for them, which I think is one of the real trade-offs of city living."
    },
    {
        id: 153,
        question: "How could your neighbourhood be improved?",
        b6: "In Dhaka, I think it could be less crowded and have better traffic management. More green spaces would also be nice.",
        b65: "In Dhaka, I think traffic and overcrowding are the biggest issues, honestly. More green spaces or small parks would also make a real difference, especially for someone like me who misses having outdoor space.",
        b7: "In Dhaka, honestly, traffic and overcrowding are probably the biggest issues, it can make even short trips feel exhausting. More green spaces or small parks would make a real difference too, especially for someone like me who genuinely misses having outdoor space to just relax in, coming from a place with a garden, the lack of that here is honestly one of the harder adjustments."
    },
    {
        id: 154,
        question: "Do you think it is important to have a good relationship with your neighbours?",
        b6: "Yes, I think it's important. Good relationships with neighbours can help in emergencies and make daily life more pleasant.",
        b65: "Yes, definitely, I think it's genuinely important. Good relationships with neighbours provide a kind of everyday support, help in emergencies, small favours, and it also just makes daily life feel more pleasant and less isolating.",
        b7: "Yes, absolutely, I'd say it's genuinely important, even more than people sometimes realize. Good relationships with neighbours provide a kind of everyday safety net, help in emergencies, small favours when you need them, but beyond the practical side, it also just makes daily life feel less isolating, especially in a city like Dhaka, where it's easy to feel anonymous otherwise. Growing up in Noakhali, where neighbours were basically like extended family, definitely shaped how much I value that."
    },
    {
        id: 155,
        question: "Do you live in a noisy area?",
        b6: "In Dhaka, yes, it's fairly noisy because of traffic. Back home in Noakhali, it's much quieter.",
        b65: "In Dhaka, yes, definitely, traffic noise especially is pretty constant. Back home in Noakhali, though, it's a completely different story, much quieter and calmer overall.",
        b7: "In Dhaka, yes, honestly, it's fairly noisy most of the time, traffic mainly, horns, engines, that constant city hum. Back home in Noakhali, though, it's a completely different world, much quieter and calmer, so switching between the two whenever I travel back and forth is honestly still something I notice every time."
    },
    {
        id: 156,
        question: "What kinds of sounds do you hear on a daily basis?",
        b6: "In Dhaka, I mostly hear traffic, horns, and people talking. Back home, it's usually birds, and sometimes the call to prayer.",
        b65: "In Dhaka, it's mostly traffic noise, horns, engines, people talking on the street. Back home in Noakhali, it's much calmer, mostly birds chirping and the call to prayer a few times a day.",
        b7: "In Dhaka, day to day, it's mostly traffic, horns honking, engines, people talking on the street, that sort of urban noise. Back home in Noakhali, it's almost the opposite, birds chirping, occasional chatter from neighbours, and the call to prayer marking out the day, which I think is honestly one of the most calming, familiar sounds for me."
    },
    {
        id: 157,
        question: "Where do you go to spend time in peace and quiet?",
        b6: "I usually go to my garden when I'm at home in Noakhali. In Dhaka, it's harder to find quiet places, but I might just stay in my room.",
        b65: "Back home, my garden is definitely my go-to spot for peace and quiet. In Dhaka, it's a lot harder to find that same kind of calm, so I'll usually just stay in my room or find a quiet corner in the library.",
        b7: "Back home, my garden is definitely my go-to, there's nowhere quite like it for peace and quiet. In Dhaka, that kind of calm is a lot harder to come by, honestly, so I usually end up just retreating to my room, or occasionally finding a quiet corner in the college library when I really need to focus or just get away from the noise for a bit."
    },
    {
        id: 158,
        question: "Are there any sounds which you think are pleasant?",
        b6: "Yes, I really like the sound of birds singing in the morning. The call to prayer is also a pleasant, calming sound for me.",
        b65: "Yes, definitely, birds singing in the morning is one, especially since I keep pet birds myself. The call to prayer is another, it has a calming, almost peaceful quality to it that I really value.",
        b7: "Yes, quite a few, actually. Birds singing in the morning is probably my favourite, especially since I keep pet birds myself, there's something genuinely soothing about it. The call to prayer is another one, it has this calming, almost meditative quality that I think a lot of people who grew up around it would understand, it's less about the sound itself and more about what it represents, a pause in the day."
    },
    {
        id: 159,
        question: "Do you have any noisy friends?",
        b6: "Yes, a couple of my friends are quite loud and talkative, especially in group settings. It's fun, though, not annoying.",
        b65: "Yes, a couple, honestly, some friends are naturally loud and talkative, especially when we're all together in a group. It's more entertaining than annoying, though, it definitely livens things up.",
        b7: "Yes, a couple, definitely, some friends are just naturally loud and talkative, especially in a group setting, they're usually the ones cracking jokes or telling stories animatedly. Honestly, though, it's more entertaining than anything else, those are usually the people who end up livening up any get-together, so I don't really mind it at all."
    },
    {
        id: 160,
        question: "Do you have a pet?",
        b6: "Yes, I currently keep a few pet birds at home. I've also had dogs and cats in the past.",
        b65: "Yes, actually, I keep a few pet birds at home right now. I've had dogs and cats in the past too, so animals have always been a part of my life in some way.",
        b7: "Yes, I currently keep a few pet birds at home, actually, and I've had dogs and cats in the past too, so animals have basically always been part of my life in one form or another. There's something I really enjoy about looking after them, it's a bit like gardening in that sense, caring for something living and seeing it thrive because of the effort you put in."
    },
    {
        id: 161,
        question: "Do you like animals?",
        b6: "Yes, I like animals a lot. I've always enjoyed having pets and taking care of them.",
        b65: "Yes, definitely, I really like animals, I always have, taking care of pets has just always felt natural to me, ever since I was a kid.",
        b7: "Yes, definitely, I really do, always have, honestly. Taking care of animals has just always felt natural to me, ever since I was a kid, whether it was dogs, cats, or the birds I keep now. There's a kind of quiet responsibility that comes with it, and I think it's taught me a fair bit about patience over the years."
    },
    {
        id: 162,
        question: "What's your favourite animal?",
        b6: "I think birds are my favourite, since I keep some as pets. I like their colours and the way they sing.",
        b65: "Probably birds, honestly, since I keep a few myself. I really enjoy their colours, their songs, and just watching them go about their day, it's quite calming actually.",
        b7: "Probably birds, if I had to pick, mainly because I keep a few myself, so I've grown genuinely attached to them. There's something calming about just watching them go about their day, the colours, the songs, even the small routines they have, it's oddly soothing to observe, similar to how I feel when I'm gardening, honestly."
    },
    {
        id: 163,
        question: "What is a popular pet to have in your country?",
        b6: "Dogs, cats, and birds are all quite popular pets in Bangladesh. In villages, some people also keep pigeons.",
        b65: "Dogs, cats, and birds are probably the most common pets here, honestly. In villages, keeping pigeons is also fairly popular, and some families keep livestock too, though that's more for practical reasons than as a pet exactly.",
        b7: "Dogs, cats, and birds would be the most common, I'd say, especially in cities. In villages, though, keeping pigeons is fairly popular too, and some families keep livestock, cows, goats, that kind of thing, though that's usually more practical than purely for companionship, unlike a cat or a bird you keep just because you enjoy their company."
    },
    {
        id: 164,
        question: "Did you have a pet as a child?",
        b6: "Yes, we had dogs and cats at home when I was a child. I really enjoyed playing with them.",
        b65: "Yes, we did, we had dogs and cats at home throughout my childhood, and I genuinely enjoyed spending time with them, playing, feeding them, that kind of thing.",
        b7: "Yes, we did, dogs and cats mostly, throughout a good chunk of my childhood, and I genuinely loved spending time with them, feeding them, playing, just being around them really. I think that's probably where my whole interest in animals started, honestly, it's carried through into keeping birds now, so it's been a pretty consistent thread in my life."
    },
    {
        id: 165,
        question: "Why do people have pets?",
        b6: "I think people have pets for company and comfort. Pets can also help reduce stress and make people feel less lonely.",
        b65: "I think it's mainly for companionship and comfort, pets can really help reduce stress, and they make people feel less lonely, especially if they live alone or are away from family.",
        b7: "Mainly for companionship, I'd say, and the comfort that comes with it. Pets have a genuine way of reducing stress and loneliness, especially for people living alone or away from family, university students, for example. For me personally, it's a bit more than just companionship too, there's a real sense of responsibility involved, caring for something else, which I think teaches you a lot about patience and selflessness along the way."
    },
    {
        id: 166,
        question: "Do you like shopping?",
        b6: "Not really, honestly. I only go shopping when I actually need something, like clothes or books.",
        b65: "Not particularly, no, shopping isn't something I get excited about. I usually only go when there's a specific need, new clothes, books for college, that kind of thing.",
        b7: "Not particularly, honestly, it's never been something I look forward to. I usually only go when there's an actual need, clothes, books for college, that kind of thing, rather than as a leisure activity in itself. I'd much rather spend that time gardening or doing something more productive, shopping just feels like a task to get through for me, not really an enjoyable experience."
    },
    {
        id: 167,
        question: "What do you usually buy when you go shopping?",
        b6: "I usually buy clothes, books for college, or sometimes gardening supplies, like seeds or small tools.",
        b65: "Mostly practical things, honestly, clothes when needed, books or stationery for college, and occasionally gardening supplies, like seeds or small tools.",
        b7: "Mostly practical things, if I'm honest, clothes when I actually need them, books or stationery for college, and every now and then, gardening supplies, seeds, small tools, that kind of thing. I'm not really someone who buys things impulsively, I tend to go in with a specific purpose rather than just browsing."
    },
    {
        id: 168,
        question: "Do you prefer shopping alone or with others?",
        b6: "I prefer shopping alone, honestly. It's quicker, and I don't have to wait for anyone or discuss decisions.",
        b65: "I prefer shopping alone, definitely, it's quicker and more efficient. I know exactly what I need, so I don't really need anyone else's opinion or have to wait around for them.",
        b7: "I definitely prefer shopping alone, honestly, mainly because it's quicker and more efficient, I usually know exactly what I need going in, so I don't really need someone else's opinion or have to wait around while they browse. That said, if it's a bigger purchase, something more important, I might ask a family member along, just for a second opinion, but for everyday stuff, alone is definitely my preference."
    },
    {
        id: 169,
        question: "Do you enjoy shopping for clothes?",
        b6: "Not particularly, honestly. I buy clothes when I need them, but I don't really enjoy the process itself.",
        b65: "Not really, no, honestly, buying clothes is more of a necessity for me than something enjoyable. I go in, get what I need, and get out fairly quickly.",
        b7: "Not particularly, honestly, it's more of a necessity than something I actually enjoy. I tend to go in knowing roughly what I want, get it, and leave fairly quickly, I'm not someone who enjoys browsing through racks of clothes for the sake of it, it just feels like a functional errand rather than a fun outing."
    },
    {
        id: 170,
        question: "Do you think online shopping is popular in your country?",
        b6: "Yes, I think online shopping is becoming more popular in Bangladesh, especially among young people who use smartphones a lot.",
        b65: "Yes, definitely, it's become increasingly popular in Bangladesh recently, especially among younger, tech-savvy people who are comfortable shopping through apps and websites.",
        b7: "Yes, it's definitely grown a lot, especially over the past several years, mainly among younger, tech-savvy people who are comfortable ordering through apps and websites rather than visiting a shop in person. It's still probably more common in cities than rural areas, though, mainly because delivery infrastructure tends to be better there, but overall, the trend is clearly moving in that direction across the country."
    },
    {
        id: 171,
        question: "What are the advantages of shopping online?",
        b6: "It's convenient, you can shop from home, and you can compare prices easily. It also saves time compared to visiting shops.",
        b65: "There are quite a few advantages, honestly, convenience being the main one, you can shop from home anytime. It also makes comparing prices across different sellers a lot easier, and it generally saves time compared to physically visiting multiple shops.",
        b7: "There are quite a few, honestly. Convenience is the big one, you can browse and buy from home whenever suits you, without needing to travel anywhere. It also makes comparing prices across sellers a lot easier, and generally just saves a lot of time compared to visiting multiple physical shops. That said, you do lose the ability to physically check the product before buying, which is probably the main trade-off."
    },
    {
        id: 172,
        question: "Do you like sports?",
        b6: "Yes, I really like sports, especially football. I enjoy watching matches, though I don't play very often myself.",
        b65: "Yes, definitely, football especially, I really enjoy following it, watching matches, that kind of thing. I don't play as much as I used to, but I'm still a big fan as a spectator.",
        b7: "Yes, definitely, football above all, I'm a huge fan, though more as a spectator these days than an active player, if I'm honest. I follow it pretty closely, Argentina and Messi especially, and there's something about watching a well-played match that I find genuinely exciting, even if I don't get out on the field myself as much as I used to."
    },
    {
        id: 173,
        question: "What's your favourite sport?",
        b6: "Football is my favourite sport. I especially like watching Argentina and Messi play.",
        b65: "Football, without a doubt, it's my favourite by far. I'm a big fan of Argentina, and watching Messi play has always been something I really look forward to.",
        b7: "Football, without a doubt, it's my favourite by quite a distance, honestly. I've followed Argentina for years, and watching Messi play in particular has always been something I genuinely look forward to, there's a certain flair and intelligence to his game that just makes it exciting to watch, even in matches that aren't otherwise particularly eventful."
    },
    {
        id: 174,
        question: "Do you watch sport on TV?",
        b6: "Yes, I watch football matches on TV, especially when Argentina is playing. I don't watch other sports as often.",
        b65: "Yes, definitely, mostly football, especially when Argentina's playing, I'll make sure to catch that. I don't really watch other sports as regularly, though.",
        b7: "Yes, definitely, football mainly, and especially anything involving Argentina, I'll make a point of catching those matches live if I can. I don't follow other sports quite as closely, though I'll occasionally catch cricket too, since it's pretty big here in Bangladesh, even if it's not my main interest."
    },
    {
        id: 175,
        question: "Did you play sport when you were a child?",
        b6: "Yes, I used to play football with friends in the neighbourhood when I was a child. It was a lot of fun.",
        b65: "Yes, definitely, football mostly, I used to play with friends in the neighbourhood pretty regularly as a kid, it was one of the highlights of my day, honestly.",
        b7: "Yes, definitely, football mostly, I used to play with neighbourhood friends pretty regularly as a kid, honestly it was one of the highlights of most days growing up. I don't play as much now, university and studies take up most of my time, but I still follow the sport just as closely, if not more so, even if my own playing days are mostly behind me at this point."
    },
    {
        id: 176,
        question: "Do you think it's important to play sport?",
        b6: "Yes, I think it's important. Sports help keep people physically fit and also teach teamwork.",
        b65: "Yes, definitely, I think it's genuinely important. It helps with physical fitness, obviously, but it also teaches valuable things like teamwork and discipline.",
        b7: "Yes, absolutely, I'd say it's genuinely important, even essential, really. Physical fitness is the obvious benefit, but I think sport also teaches things that are harder to learn elsewhere, teamwork, discipline, handling both winning and losing gracefully, that kind of thing. Even for someone like me who doesn't play as actively as I used to, I think those lessons from childhood football have stuck with me in other areas of life, honestly."
    },
    {
        id: 177,
        question: "Why do people like watching sport?",
        b6: "I think people like the excitement and drama of sport. It's also fun to support a team and celebrate when they win.",
        b65: "I think it's mainly the excitement and unpredictability, you never really know what's going to happen, which makes it thrilling. Supporting a team also gives people a sense of belonging and shared excitement with others.",
        b7: "Mainly the excitement and unpredictability, I'd say, you genuinely never know what's going to happen until the final whistle, which is a big part of the thrill. But I think there's also something deeper, supporting a team gives people a sense of belonging, a shared identity almost, especially during big tournaments, when it feels like the excitement is shared not just with friends, but with an entire country, watching Argentina during a World Cup, for instance, is a completely different experience because of that collective energy."
    },
    {
        id: 178,
        question: "Do you often watch TV?",
        b6: "Not really, honestly. I mostly watch things online, like YouTube, rather than traditional TV.",
        b65: "Not that often, no, most of my viewing happens online these days, YouTube especially, rather than traditional television. I might catch the news or a football match on TV occasionally, though.",
        b7: "Not that much, honestly, most of what I watch happens online these days, YouTube mainly, rather than sitting down in front of a traditional TV. That said, I'll occasionally catch the news or a football match on TV, especially if my family's watching it together, there's something different about watching that way versus alone on a phone or laptop."
    },
    {
        id: 179,
        question: "What kind of TV programmes do you like?",
        b6: "I like watching the news and football matches. I also enjoy educational programmes sometimes.",
        b65: "I mostly like the news and football matches when I do watch TV, and occasionally educational programmes or documentaries too, if something interesting comes on.",
        b7: "Mostly the news and football matches, if I'm actually sitting in front of a TV, and occasionally an educational documentary if something genuinely interesting comes on. I'm honestly not a big fan of the more dramatic entertainment shows, dramas or reality TV, that kind of thing, they've just never really appealed to me the way factual or sports content does."
    },
    {
        id: 180,
        question: "What was your favourite show when you were a child?",
        b6: "Honestly, I don't remember a specific favourite show. I think I watched some cartoons occasionally, but I wasn't a huge TV watcher even as a child.",
        b65: "Honestly, I can't recall one specific favourite, I watched some cartoons occasionally as a kid, but I was never really glued to the TV the way some children are, I was usually outside instead.",
        b7: "Honestly, I can't really recall one specific favourite show, I watched some cartoons occasionally as a kid, sure, but I was never really glued to the TV the way a lot of children are. I was usually outside instead, in the garden or playing with friends, so TV was more of an occasional thing rather than a big part of my childhood routine."
    },
    {
        id: 181,
        question: "Do you think TV has changed much in the last few years?",
        b6: "Yes, I think so. More people watch content online now, like YouTube or streaming services, instead of traditional TV.",
        b65: "Yes, definitely, quite a lot actually. A lot of people, myself included, have shifted toward online platforms like YouTube or streaming services rather than watching traditional TV channels.",
        b7: "Yes, quite dramatically, actually, especially with the shift toward streaming and online platforms. A lot of people, myself very much included, have moved away from scheduled TV channels entirely, in favour of things like YouTube or streaming services, where you can watch whatever you want, whenever you want, rather than being tied to a fixed broadcast schedule. I think that shift alone has fundamentally changed how people, especially younger generations, consume media."
    },
    {
        id: 182,
        question: "Do you prefer watching TV alone or with your family?",
        b6: "I prefer watching with family, especially for things like football matches. It feels more enjoyable together.",
        b65: "Definitely with family, especially for something like a football match, watching together makes it a lot more enjoyable, there's a shared excitement to it that watching alone just doesn't have.",
        b7: "Definitely with family, especially for something like a football match, there's a shared excitement to it that watching alone just doesn't replicate, everyone reacting together, discussing it afterward. For something more educational, though, like a documentary, I don't mind watching alone, since I can actually focus and absorb the content without distraction."
    },
    {
        id: 183,
        question: "How often do you watch news on TV?",
        b6: "Not very often on TV specifically, I usually check news online or through my phone instead.",
        b65: "Not that often on TV specifically, honestly, I mostly get my news online or through my phone these days, it's just quicker and more convenient.",
        b7: "Not that often on TV specifically, if I'm honest, most of my news comes through my phone or online sources these days, it's just quicker, and I can check it whenever I have a spare moment, rather than waiting for a scheduled broadcast. That said, if my family has the TV on for the news, I'll definitely sit and watch along, it's often a good chance to actually discuss current events together."
    },
    {
        id: 184,
        question: "How do you usually travel around your city?",
        b6: "In Dhaka, I usually take a rickshaw for short distances, or a bus for longer ones. Sometimes I also use the Metrorail.",
        b65: "In Dhaka, mostly a rickshaw for shorter distances, they're just convenient and I actually enjoy the ride. For longer trips, I'll take a bus, or sometimes the Metrorail if it's along the route.",
        b7: "In Dhaka, mostly a rickshaw for shorter distances, honestly, I just enjoy the ride, there's something relaxing about it that other transport doesn't really offer. For longer trips across the city, I'll take a bus, or the Metrorail if it happens to be going my way, it's definitely faster when the route lines up."
    },
    {
        id: 185,
        question: "What's your favourite kind of transport?",
        b6: "My favourite is the rickshaw. I find it relaxing, especially for short distances.",
        b65: "Definitely the rickshaw, it's my favourite by far. There's something calming about it, especially for short distances, it's slower-paced and lets you actually notice your surroundings.",
        b7: "Definitely the rickshaw, without a doubt, it's my favourite by quite a margin, honestly. There's something genuinely calming about it, especially over short distances, it's slower-paced, lets you actually notice your surroundings, the street life, the shops, rather than just rushing past everything in a car or bus. It's a small thing, but that little bit of unhurried travel is something I've come to really value, especially living in a city as fast-paced as Dhaka."
    },
    {
        id: 186,
        question: "Do you prefer public transport or private transport?",
        b6: "I prefer public transport, mostly for practical reasons, it's cheaper and more convenient for a student like me.",
        b65: "I'd say public transport, mainly for practical reasons, it's cheaper, and honestly more convenient too, since I don't have to deal with parking or traffic decisions myself.",
        b7: "Public transport, definitely, mainly for practical reasons, it's cheaper, obviously, and more convenient too, in the sense that I don't have to worry about parking, fuel, or navigating traffic myself, someone else handles all that. It's not necessarily the fastest option all the time, but for a student on a budget like me, the trade-off is completely worth it."
    },
    {
        id: 187,
        question: "Is public transport popular in your country?",
        b6: "Yes, it's quite popular, especially buses and rickshaws. Many people use them because they are affordable.",
        b65: "Yes, definitely, buses and rickshaws especially are hugely popular here, mainly because they're affordable and widely available, even in smaller towns.",
        b7: "Yes, definitely, buses and rickshaws especially are hugely popular here, mainly because they're affordable and pretty widely available, even outside the major cities. In Dhaka specifically, there's also the Metrorail now, which has become popular fairly quickly, it's faster and avoids a lot of the traffic congestion that buses get stuck in, so there's a growing shift toward it among people who can access it."
    },
    {
        id: 188,
        question: "How could public transport be improved?",
        b6: "I think buses could be more punctual and less crowded. Better roads would also help reduce traffic delays.",
        b65: "I think buses especially could be more punctual and less overcrowded, that's probably the biggest complaint people have. Better road infrastructure would also help reduce delays caused by traffic.",
        b7: "Buses especially, I'd say, punctuality and overcrowding are probably the biggest complaints people have, you often end up waiting a while, and then it's packed once it arrives. Better road infrastructure would help with delays too, but honestly, I think expanding something like the Metrorail to cover more of the city would make the biggest difference, since it avoids road traffic altogether, that seems like the more sustainable long-term fix rather than just patching up the bus system."
    },
    {
        id: 189,
        question: "Do you enjoy long journeys?",
        b6: "Yes, I actually enjoy long journeys, especially by train or bus, since I can relax and look at the scenery.",
        b65: "Yes, actually, I really enjoy long journeys, particularly by train, there's something relaxing about watching the scenery pass by, especially through the countryside.",
        b7: "Yes, actually, I genuinely enjoy long journeys, by train especially, there's something relaxing about just watching the countryside scenery pass by for hours, it gives me time to think, or just switch off entirely, which doesn't happen that often given how busy university life can get. Buses are fine too, though trains definitely have the edge for me, mainly because of the smoother ride and better views."
    },
    {
        id: 190,
        question: "Do you like travelling?",
        b6: "Yes, I really like travelling, especially by train or bus. I enjoy seeing new places and different scenery.",
        b65: "Yes, definitely, I really enjoy travelling, train journeys especially, there's something relaxing about watching the landscape change as you move. I particularly like trips that involve nature or countryside views.",
        b7: "Yes, definitely, I really enjoy it, train journeys especially, there's something relaxing about watching the landscape shift as you travel. I'm particularly drawn to trips involving nature or countryside scenery rather than big, crowded tourist spots, I think I get more out of quiet, peaceful places than famous, busy ones, if I'm honest."
    },
    {
        id: 191,
        question: "What's the best place you've ever visited?",
        b6: "I think one of the best places I've visited is somewhere with a lot of nature, since I really enjoy peaceful, green scenery. I don't travel very far usually.",
        b65: "Honestly, I haven't travelled to too many places outside Bangladesh, but within the country, I've really enjoyed visits to areas with a lot of natural scenery, greenery, rivers, that kind of thing, since it matches what I enjoy most about travelling.",
        b7: "Honestly, I haven't travelled internationally yet, so within Bangladesh, I'd say the trips I've enjoyed most have been to places with a lot of natural scenery, rivers, greenery, open countryside, since that matches what I actually value in travel, quiet and nature rather than crowded landmarks. I'm hoping to change that international part soon, though, especially since I'd like to study abroad eventually."
    },
    {
        id: 192,
        question: "How do you usually travel long distances?",
        b6: "I usually travel by bus or train for long distances. I enjoy train journeys the most.",
        b65: "Usually by bus or train, depending on the destination and what's available. I definitely enjoy train journeys the most, though, they're more comfortable and relaxing.",
        b7: "Usually bus or train, depending on where I'm headed and what's actually available on that route. Train journeys are definitely my favourite, though, more comfortable, and there's just more room to relax and enjoy the scenery compared to being packed into a bus for hours."
    },
    {
        id: 193,
        question: "Do you like travelling with family or friends?",
        b6: "I think both are good in different ways. With family, it feels comfortable, and with friends, it's more fun and adventurous.",
        b65: "Honestly, both have their own appeal. With family, travelling feels more comfortable and relaxed, while with friends, it tends to be a bit more spontaneous and fun, so I don't think I could really choose one over the other.",
        b7: "Honestly, both have their own appeal, and I don't think I could really choose one over the other. With family, it's more comfortable, relaxed, less pressure to plan every detail. With friends, though, it tends to be more spontaneous, a bit more adventurous, trying things you maybe wouldn't with family around. So it really depends what kind of trip I'm looking for, comfort or a bit of adventure."
    },
    {
        id: 194,
        question: "What places would you like to visit in the future?",
        b6: "I would like to visit Germany someday, mainly because I'm interested in studying there in the future.",
        b65: "I'd really like to visit Germany at some point, mainly because I'm interested in pursuing higher studies there eventually, so it would be nice to actually experience the country before committing to that.",
        b7: "Germany's probably top of my list, honestly, mainly because I'm genuinely interested in pursuing higher studies there eventually, so visiting would let me actually experience the culture and academic environment before fully committing to that path. Beyond that, I'd also love to see more of Europe generally, somewhere with a mix of history and natural scenery, since that combination has always appealed to me."
    },
    {
        id: 195,
        question: "Do you prefer travelling to new places or visiting the same places again?",
        b6: "I prefer new places, mostly, since I like experiencing different things. But I don't mind revisiting a place I really loved either.",
        b65: "I'd say new places, mostly, I like the excitement of experiencing somewhere different. That said, I wouldn't mind revisiting somewhere I genuinely loved, there's comfort in familiarity too.",
        b7: "New places, mostly, honestly, there's a certain excitement in experiencing somewhere completely different that I really value. That said, I wouldn't rule out revisiting somewhere I genuinely loved either, there's a different kind of comfort in familiarity, knowing exactly what to expect and being able to appreciate details you might have missed the first time around."
    },
    {
        id: 196,
        question: "What's the weather like where you live?",
        b6: "It's generally hot and humid, especially in summer. We also get a lot of rain during the monsoon season.",
        b65: "It's generally hot and humid for most of the year, especially during summer, and then quite wet during the monsoon season, when we get heavy rainfall regularly.",
        b7: "It's generally hot and humid for a good part of the year, especially through summer, and then it shifts into the monsoon season, when we get heavy, fairly consistent rainfall for weeks at a time. Winter's the most pleasant stretch, honestly, much cooler and drier, it's probably my favourite part of the year weather-wise."
    },
    {
        id: 197,
        question: "What's your favourite type of weather?",
        b6: "I like cool, mild weather the most, like in winter. It's comfortable for going outside and gardening.",
        b65: "I'd say cool, mild weather, like we get in winter, is my favourite. It's really comfortable for being outside, gardening especially, without the heat or humidity getting in the way.",
        b7: "Cool, mild weather, definitely, winter especially, that's my favourite by far. It's just so much more comfortable for being outside, gardening in particular, since the heat and humidity we get most of the year can make that pretty exhausting. There's also something about a crisp, cool morning that just feels more energizing to start the day with."
    },
    {
        id: 198,
        question: "What do you usually do in the hot weather?",
        b6: "I usually stay indoors more and avoid going out during the hottest part of the day. I also drink a lot of water.",
        b65: "I try to stay indoors during the hottest parts of the day, honestly, and I'll do things like gardening early in the morning or evening instead, when it's cooler. I also make sure to drink plenty of water.",
        b7: "I try to time things around the heat, honestly, gardening especially, I'll do that early morning or evening when it's cooler, rather than during the hottest part of the day. Indoors is where I spend most of the afternoon during peak summer, just staying hydrated and avoiding unnecessary time outside when the heat's at its worst."
    },
    {
        id: 199,
        question: "Do you prefer dry weather or wet weather?",
        b6: "I prefer dry weather, honestly. Wet weather makes it harder to go outside or do gardening.",
        b65: "I'd say dry weather, definitely, it's just easier to plan things around, gardening especially, wet weather can make that a lot more difficult and messy.",
        b7: "Dry weather, definitely, mainly because it's just easier to plan around, gardening especially, heavy rain can turn things pretty muddy and honestly quite inconvenient. That said, I don't mind the monsoon entirely, there's something calming about rain in moderation, it's really heavy, prolonged rain that becomes a hassle rather than rainfall itself."
    },
    {
        id: 200,
        question: "Answer questions about weather changes",
        b6: "Yes, I think so. Summers seem hotter than before, and the rain patterns feel less predictable now.",
        b65: "Yes, definitely, it feels like summers have gotten noticeably hotter over the years, and rainfall patterns seem less predictable too, sometimes it rains heavily out of season, or the monsoon feels shorter but more intense.",
        b7: "Yes, definitely, it feels like summers have gotten noticeably hotter over the years, and rainfall patterns seem a lot less predictable now too, sometimes we get heavy rain out of season, or the monsoon feels shorter but more intense than it used to be. I'm not a climate expert, obviously, but it's hard not to notice these shifts, and I'd guess it ties into broader climate change patterns that a lot of countries are experiencing, Bangladesh being particularly vulnerable given its low-lying geography."
    }
];
