import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const createNickname = false;

  const onCreateNicknameClick = () => {
    createNickname = true;
  };

  const onSavePostClick = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId) //handled inside slice
        // postAdded({
        //   id: nanoid(),
        //   title,
        //   content,
        // })
      );

      setTitle("");
      setContent("");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className="new-post-container">
      <section className="create-post">
        <h2>Add a new post</h2>
        <form>
          <label htmlFor="postTitle">Post Title: </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChange}
          />
          <label htmlFor="author">Author:</label>
          <select id="author" value={userId} onChange={onAuthorChange}>
            <option value="">Anonymous</option>
            {userOptions}
          </select>
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChange}
          />
          <button
            type="button"
            id="submit"
            disabled={!canSave}
            onClick={onSavePostClick}
          >
            Save Post
          </button>
          {/* <button type="button" id="nicknameBtn"
          onClick={onCreateNicknameClick}>Create new nickname</button>
        if(createNickname) {
          {<label htmlFor="newNickname">Enter new nickname: </label>
            <input
              type="text"
              id="newNickname"
              name="newNickname"
              value={title}
              onChange={onTitleChange}
            />
        }
      } */}
        </form>
      </section>
    </div>
  );
};

export default AddPostForm;
