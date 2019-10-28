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
        speaker: require('./speakers/roy-derks')
    },
    {
        title: "Let's Build with WebAssembly",
        abstract: `
            This will be a cross-framework talk to developers mid-level+.
            We will build a WebAssembly module live on stage, and look into how other languages (Rust, C, C++) can execute on the web, alongside the frameworks we know and love today.
        `,
        tech: ["Webassembly", "JavaScript", "Rust"],
        speaker: require('./speakers/tejas-kumar'),
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
        tech: ["HTML", "CSS", "JavaScript", "Angular", "D3.js"],
        speaker: require('./speakers/eleftheria-batsou')
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
        speaker: require('./speakers/andrzej-mazur')
    },
    {
        title: "HTML Semantics: #a11y in web development",
        abstract: `
            HTML is, by default, accessible.
            However, people tend to reinvent the wheel by not using the proper elements for their purposes.
            This talk aims to address the inbuilt accessibility features of HTML by using semantic elements and attributes.
            We will also cover other aspects of accessibility such as navigation and content.
        `,
        tech: ["HTML"],
        speaker: require('./speakers/jemima-abu')
    },
    {
        title: "Mastering Reactive Programming with RxJS",
        abstract: `
            We will focus on different RxJS tips that developers can ignore but they make their app more reactive.
            Using RxJS operators can be tricky when you start writing complex application.
            But we will see together that our daily code can be improved by simply choosing the right operators in the right place.
        `,
        tech: ["Reactive Programming", "RxJS", "Angular"],
        speaker: require('./speakers/jerbi-saif')
    },
    {
        title: "How browser works?- Behind the Scene!",
        abstract: `
            In this talk, Rakhi will talk about the high-level architecture of the browser and their components like rendering engine.
            What is going behind the scene? How browsers are rendering HTML/CSS/JS for you?
            How do parsing and Layout works on browser level?
            What happens when you search for something on internet?
        `,
        tech: ["HTML", "CSS", "JavaScript"],
        speaker: require('./speakers/rakhi-sharma')
    }
];
