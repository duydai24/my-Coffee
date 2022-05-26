import * as types from "../types";

export const initialState = {
  product: [
    {
      id: 1,
      name: "Pink Premium Ceramic",
      image: "/products1.jpg",
      price: 99.0,
      quantity: 20,
      categoryId: 1,
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 2,
      name: "Golden Designers Mug",
      image: "/products2.jpg",
      price: 69.0,
      quantity: 20,
      categoryId: 2,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 3,
      name: "Red Love Cup",
      image: "/products3.jpg",
      price: 37.0,
      quantity: 20,
      categoryId: 3,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 4,
      name: "Black Tea Cup",
      image: "/products4.jpg",
      price: 29.0,
      quantity: 20,
      categoryId: 4,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 5,
      name: "B&W Essentials Mug",
      image: "/products5.jpg",
      price: 19.0,
      quantity: 20,
      categoryId: 1,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 6,
      name: "Pink Premium Ceramic",
      image: "/products6.jpg",
      price: 37.0,
      quantity: 20,
      categoryId: 2,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 7,
      name: "Winter Style Mug",
      image: "/products7.jpg",
      price: 25.0,
      quantity: 20,
      categoryId: 3,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 8,
      name: "Ceramic Tea",
      image: "/products8.jpg",
      price: 46.0,
      quantity: 20,
      categoryId: 4,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 9,
      name: "No Handle Bar Cup",
      image: "/products9.jpg",
      price: 34.0,
      quantity: 20,
      categoryId: 1,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 10,
      name: "Espresso Cup by Mugs.co",
      image: "/products10.jpg",
      price: 25.0,
      quantity: 20,
      categoryId: 2,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 11,
      name: "White Ceramic",
      image: "/products11.jpg",
      price: 29.0,
      quantity: 20,
      categoryId: 3,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
    {
      id: 12,
      name: "Blue Premium Mug",
      image: "/products12.jpg",
      price: 99.0,
      quantity: 20,
      categoryId: 4,
      desciption:
        "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      details:
        "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    },
  ],
};
export const productReduce = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        product: action.payload.products,
      };
    default:
      return state;
  }
};
