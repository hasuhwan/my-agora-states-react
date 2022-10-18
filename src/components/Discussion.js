const Discussion = ({ discussion, deleteDiscussion }) => {
  const { id, createdAt, title, avatarUrl, author, url } = discussion;
  const onClickHandle = async (e) => {
    const id = e.target.parentElement.parentElement.id;
    const deleteid = await fetch(`http://localhost:4000/discussions/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
    deleteDiscussion(deleteid);
  };
  return (
    <li className="discussion__container" id={id}>
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={avatarUrl}
          alt="avatar of dubipy"
        />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={url}>{title}</a>
        </h2>
        <div className="discussion__information">
          {`${author} / ${new Date(createdAt).toLocaleString()}`}
        </div>
      </div>
      <div className="discussion__answered">
        <p>☑</p>
        <button onClick={onClickHandle}>X</button>
      </div>
    </li>
  );
};
export default Discussion;
