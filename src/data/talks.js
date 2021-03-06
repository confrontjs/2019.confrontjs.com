module.exports = [
    {
        title: "Into the web multiverse",
        abstract: `
            We always consider the web to be a unique thing.
            A decentralised platform based on open technologies.
            A sturdy, open utopia of people using technology to collect and archive the sum of human knowledge.
            However, in the 20 years we have used the web, this has become less and less of a goal.
            The web is a thing everyone likes to rely on, but the use of it has to cater to different needs and demands.
            It is time for us as developers to be aware of these needs and understand different audiences better.
        `,
        tech: ["JavaScript", "Node.js", "Web Standards"],
        speaker: require('./speakers/chris-heilmann'),
        slides_url: "https://noti.st/codepo8/8gRX6l/into-the-web-multiverse",
        keynote: true
    },
    {
        title: "Web applications of the future with TypeScript and GraphQL",
        abstract: `
            Type systems like TypeScript are the next thing when developing JavaScript applications.
            They make sure that your props are passed in the correct form and shape throughout your application.
            Together with GraphQLs query language based on types, you can create the web application of the future!
        `,
        tech: ["TypeScript", "GraphQL"],
        slides_url: "https://www.slideshare.net/RoyDerks1/web-applications-of-the-future-with-typescript-and-graphql-202812428",
        speaker: require('./speakers/roy-derks')
    },
    {
        title: "Sleeping better at night",
        abstract: `
            Why are we afraid to deploy our app on Friday evening? Well, mostly because no one wants to debug production issues on Saturday and we really want to go home.
            Answering the (seemingly) basic question of "does our code actually work?" is surprisingly difficult at times.
            In this talk I'd like to cover different approaches we, JavaScript developers, can embed into our toolkit to make our lives easier and our users happier (hint: unit tests are not enough).
        `,
        tech: ["JavaScript", "Testing", "Cypress"],
        speaker: require('./speakers/tomasz-lakomy'),
        slides_url: "https://tlakomy.github.io/sleeping-better-at-night/",
        keynote: true
    },
    {
        title: "When you think there is not time for learning or coding",
        abstract: `
            Do you ever feel like you’re stuck in your career?
            Do you constantly feel like you don’t have time to work on your projects?
            Do you want to learn something new, expand your knowledge, develop yourself and be the best you can be?

            In this session, I am going to share my story on how I started coding, how I make time to work on side projects and how you can grow and advance in your career.
            After this talk, I hope you 'll be inspired to work smarter, make new habits and continue pushing yourself even when things fall apart.

            I will present some helpful tips about self-motivation, time-management, setting priorities and goals, staying organized, believing in yourself and keeping a balance between your career and personal life.
            To do so, I'm going to use as an example my personal story of how I got into the tech world, the struggles, the rejections, what I’ve learned and how you can succeed by being consistent and determined.
            Additionally, in this session, we are going to talk about building the habit of coding and the benefits of it. We are going to explore ways of finding mentors in your job and outside of it and also expanding your social network.

            This talk is not only about getting better at your 9 to 5 job but also about developing yourself.

            It is an inspirational talk beneficial for all kind and levels of developers. it's not specific to any framework or language.

            The talk is divided into 3 parts:
            A. My coding journey (How I started to code, what I've learned, the struggles and finally the success)
            B. Habit formation (How to form a habit, how to find time, how to work towards your dreams and how to achieve your goals and how to maintain the desired results)
            C. Dealing with frustration/stress (How to deal with a toxic workplace, your arrogant colleagues and... yourself)
        `,
        tech: ["JavaScript", "Angular", "HTML", "CSS", "D3.js"],
        speaker: require('./speakers/eleftheria-batsou'),
        slides_url: "https://docs.google.com/presentation/d/1RH5ZGkuBx-5YBtQawRokZPtfhgOvV3dfj1uY_s7Um8Q",
    },
    {
        title: "The past, present, and the future of HTML5 game development",
        abstract: `
            We've come a long way from "is it technically possible to build a web game?" to "oh my, there are so many of them!".
            What are the current trends in web game development from the perspectives of independent creators and big studios alike?
            Can hyper casual experiences mix with PWAs, WebXR, and WebAssembly?
            Join me in exploring the future of HTML5 game development!
        `,
        tech: ["PWA", "WebXR", "WebAssembly"],
        speaker: require('./speakers/andrzej-mazur'),
        slides_url: "http://end3r.com/slides/confrontjs19-games/",
    },
    {
        title: "The Importance of Clean Code",
        abstract: `
            So you’ve learned how to program. You now feel cool and powerful,
            you can actually “do stuff”. But what’s next? How do you improve your skills?
            You hear some advice to write “clean code”. But what is the definition of clean code,
            and how do you write it? And why does it matter so much?
            I can’t promise you’ll become a better programmer after this talk,
            or that you’ll get a “code-sense”, but I will show you some tricks,
            techniques and tools you can use to improve your code quality.
        `,
        tech: ["Code Clean"],
        speaker: require('./speakers/tetiana-platonova'),
        slides_url: "https://malyfko.github.io/the-importance-of-clean-code/",
    },
    {
        title: "Mastering Reactive Programming with RxJS",
        abstract: `
            We will focus on different RxJS tips that developers can ignore but they make their app more reactive.
            Using RxJS operators can be tricky when you start writing complex application.
            But we will see together that our daily code can be improved by simply choosing the right operators in the right place.
        `,
        tech: ["Reactive Programming", "RxJS", "Angular"],
        speaker: require('./speakers/jerbi-saif'),
        slides_url: "https://docs.google.com/presentation/d/1RgAJFbG1hLIRiuSr4_gTEY3AzRlreR20YD3IAJuCc9Y",
    },
    {
        title: "How to help your editor love your Vue component library",
        abstract: `
            For web developers, one of the best things about Vue is its flexibility. Various ways to develop components,
            powerful mixins, and the freedom to choose a build system are just some of the advantages of Vue.
            In this talk we'll look at Vue component libraries from our perspective as IDE developers and discuss
            some challenges we're facing with such flexibility. How to find all the available components in a library?
            What types their props have? Where are the docs? These are just some of the questions we have to answer.
            Finally, I'll tell the story of how we ended up creating web-types, a format for describing component libraries.
            I'll demonstrate how it can help editors and documentation generators and how to use it.
        `,
        tech: ["Vue", "IDE"],
        speaker: require('./speakers/piotr-tomiak'),
        slides_url: "https://www.slideshare.net/PiotrTomiak/how-to-help-your-editor-love-your-vue-component-library-204382768",
    },
    {
        title: "How to change mindset of coworkers?",
        abstract: `
            The short story of moving from .NET Monolith to Node.js Microfrontends and how did it affect our organisation.
        `,
        tech: ["Node.js"],
        speaker: require('./speakers/wojciech-jureczka'),
        slides_url: "https://www.slideshare.net/WojciechJureczka/wojciech-jureczka-migrating-from-net-monolith-to-nodejs-microfrontends-204119089",
    },
    {
        title: "Should I fire my DevOps already? Build your infrastructure using TypeScript",
        abstract: `
            You are a developer. And as a developer you like to develop - that's pretty obvious. But what to do with your app? How to share your bright ideas with the world?

            Options are endless. But most of them are obsolete, difficult, not scalable, time-consuming. Even liked and well perceived cloud solutions are not free from those drawbacks. So you may use their (very nice and user-friendly, to be fair) web interfaces, but using them is not very productive and doing that for production is not exactly what you want to do. You may also want to use Cloud Formation- or Terraform-like technologies, which are, however, far different from what you already know.

            How about I show you how to use the technology that you already know to make not only frontend and backend application, but also to create the whole scalable, easily maintainable and modern infrastructure for your app?

            Sounds good or you wanna call it a bluff?
        `,
        tech: ["TypeScript", "DevOps"],
        speaker: require('./speakers/przemyslaw-zych'),
        slides_url: "https://www.slideshare.net/PiotrTomiak/how-to-help-your-editor-love-your-vue-component-library-204382768",
    },
    {
        title: "How close is your data?",
        abstract: `
            JavaScript is a very high level language. As such, most developers don't tend to think a lot about
            how variables are represented in memory. In this lightning talk, I will explain how variables are
            presented in memory, how it affects the CPU and how the way you distribute and access your data in JS affects performance.
        `,
        tech: ["Performance"],
        speaker: require('./speakers/yonatan-kra'),
        slides_url: "https://docs.google.com/presentation/d/e/2PACX-1vSFTjQs5f5a3iCCUX-ZgtPm5CRsMwy3Q8plYmB67fCjy5tjdTtlT4-Y5PUOoZM277ZnB89K0bUkHSgp/pub",
        lightningTalk: true,
    },
    {
        title: "Microinteractions: Little Things That Matter",
        abstract: `
            Microinteractions are those little moments where design and code work together at their best.
            When used with care, they can even become signature moments, the way clapping for an article
            on Medium expresses the brand’s identity in a way that goes beyond any language or culture.
            In this talk, I’ll introduce the microinteraction at the abstract level, reveal its building
            blocks and show some concrete ways to understand and use them to create memorable, compelling interfaces.
        `,
        tech: ["User Experience", "Microinteractions"],
        speaker: require('./speakers/yonatan-doron'),
        slides_url: "https://docs.google.com/presentation/d/170llyyqWCS3cs1Y_DTisQYTq20SjghtxAg3JesBDH6w",
        lightningTalk: true,
    },
    {
        title: "Mobile First? Desktop First? Basic First - A New Approach for Responsive Design",
        abstract: `
            Basic First is a whole new approach for designing and implementing responsive design.
            Utilizing this technique that was developed by Elad Shechter we are able to create a modular CSS architecture with components.
            This way we get better project organization and more important a much more robust and effective
            manner of controlling and managing responsiveness across devices, without fear of breaking code.
        `,
        tech: ["User Interface", "Responsive Design"],
        speaker: require('./speakers/elad-shechter'),
        slides_url: "https://docs.google.com/presentation/d/1AqKFuPsThLn0aFU5EWGCop9QlvuDTaKOSQOy9QBRmoI",
        lightningTalk: true,
    },
    {
        title: "Tips for maintainable Vue code",
        abstract: `
            Maintainability of code is one of the most crucial things in programming,
            but what makes code easy to work with?

            During last 3 years we've built small, medium and big apps using Vue in Docplanner.
            To keep our apps maintainable we came up with numerous conventions that we strictly
            keep up to and now I want to share them with you.
        `,
        tech: ["Vue"],
        speaker: require('./speakers/jan-salwowski'),
        slides_url: "https://docs.google.com/presentation/d/e/2PACX-1vS_Tl7OG5nTrfNyka7MGzBAptk3-3s3HGVDWhOD2Y_igngs8zxpf-ANM4En_GYeTw/pub",
        lightningTalk: true,
    },
    {
        title: "Lessons learned migrating from a monolith frontend",
        abstract: `
            When building a startup, you have to deliver features fast or you die.
            A few years later, you’ve survived but your code is a huge mess. What do you do?

            Here is the quick story of how we migrated from jQuery and twig templates to a modern React based PWA,
            with continuous delivery. And how we solved our biggest issue: working with APIs that don’t exist yet.
        `,
        tech: ["Monorepo", "React", "PWA"],
        speaker: require('./speakers/tymon-terlikiewicz'),
        slides_url: "https://docs.google.com/presentation/d/1yXl8adHirL4aZtwBvSgONa-iyQmag85mTp42RB5pERE",
        lightningTalk: true,
    },
    {
        title: "The sweet allure of a full rewrite",
        abstract: `
            Do you ever feel like your code is beyond hope? Once you reach a certain level of tech debt,
            throwing everything away and starting things afresh can feel like the cleanest solution.
            But is it? Or is it a siren's call luring you to your doom?

            Join me for a few stories and tips of how to resist the temptation and when to submit to it.
        `,
        tech: [],
        speaker: require('./speakers/nadia-ginalska'),
        slides_url: "https://docs.google.com/presentation/d/1qaw2ayjFZaBUGZGt67ZwB9mHZuLUYI-6c3bCwIjPe-E",
        lightningTalk: true,
    },
];
