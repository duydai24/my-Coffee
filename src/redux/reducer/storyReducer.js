import { GET_STORY } from "../types";

export const initialState = {
  story: [
    {
      id: 1,
      image: "/story1.jpg",
      title:
        "Health Check: why do I get a headache when I haven’t had my coffee?",
      content:
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      date: "OCTOBER 9, 2018",
    },
    {
      id: 2,
      image: "/story2.jpg",
      title: "How long does a cup of coffee keep you awake?",
      content:
        "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
      date: "OCTOBER 9, 2018",
    },
    {
      id: 3,
      image: "/story3.jpg",
      title:
        "Recent research suggests that heavy coffee drinkers may reap health benefits.",
      content:
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      date: "OCTOBER 9, 2018",
    },
    {
      id: 4,
      image: "/story5.jpg",
      title: "More coffee, lower death risk?",
      content:
        "Eveniet itaque aperiam qui officia in ducimus. Voluptas culpa ut eligendi in. Minima est dolores dolore aut et et alias p",
      date: "OCTOBER 9, 2018",
    },
    {
      id: 5,
      image: "/story6.jpg",
      title: "Will drinking coffee prolong your life?",
      content:
        "Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. Illum eveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectus",
      date: "OCTOBER 9, 2018",
    },
  ],
};
export const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_STORY:
    //   return {
    //     ...state,
    //     story: action.payload.storys,
    //   };
    default:
      return state;
  }
};
