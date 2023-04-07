const App = {
  data() {
    return {
      holdMyItem: [],
      courseList: [
        { name: "HTML", price: 100, courseImg: "img.png" },
        { name: "CSS", price: 200, courseImg: "img.png" },
        { name: "JavaScript", price: 300, courseImg: "img.png" },
        { name: "Vue", price: 400, courseImg: "img.png" },
        { name: "React", price: 500, courseImg: "img.png" },
        { name: "Node", price: 600, courseImg: "img.png" },
        { name: "MongoDB", price: 700, courseImg: "img.png" },
      ],
      computed: {
        totalBill() {
          return this.holdMyItem.reduce(
            (total, item) => Number(item.price) + total,
            0
          );
        },
      },
      methods: {
        addToCourse(course) {
          this.holdMyItem.push(course);
        },
      },
    };
  },
};

Vue.createApp(App).mount("#vapp");
