import Discussion from "./Discussion";
const DiscussionsList = ({
  discussion,
  deleteDiscussion,
  renderArticle,
  articleTimes,
}) => {
  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {discussion
          .slice(
            (renderArticle - 1) * articleTimes,
            renderArticle * articleTimes
          )
          .map((ele) => {
            return (
              <Discussion
                discussion={ele}
                key={ele.id}
                deleteDiscussion={deleteDiscussion}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default DiscussionsList;
