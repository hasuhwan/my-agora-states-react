import PageComponent from "./PageComponent";
const PageList = ({ discussion, renderArticleFunc, articleTimes }) => {
  let length = Math.ceil(discussion.length / articleTimes);
  const arr = [];
  let count = 1;

  for (let i = 0; i < length; i++) {
    arr.push(
      <PageComponent
        key={count + "c"}
        count={count}
        renderArticleFunc={renderArticleFunc}
      />
    );
    count++;
  }
  return <div className="button-section">{arr}</div>;
};
export default PageList;
