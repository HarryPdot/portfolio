const axios = require("axios").default;

export default function Project() {
  return axios
    .get(
      "https://api.storyblok.com/v2/cdn/stories/projects?cv=1646294829&token=QYvQtCHehfgMxuXzqVeecwtt&version=published"
    )
    .then((res) => {
      let newArr = [];
      res.data.story.content.body.forEach((arr) => {
        newArr.push({ arr });
      });
      return newArr;
    });
}
