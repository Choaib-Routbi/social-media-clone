import { useState } from "react";
import "./App.css";

function App() {
  const [postTitle, setPostTitle] = useState("");

  const [postText, setPostText] = useState("");

  const [postThumb, setPostThumb] = useState("");

  const [posts,setPosts] = useState([])
  

  const publishPost = () => {
    if (!postText) return;
    setPosts([{ text:postText, title:postTitle, thumb:postThumb },...posts])
    setPostTitle("");
    setPostText("");
    console.log("published!");  
  };
  const cancelPost = () => {
    setPostTitle("");
    setPostText("");
      
  };
  const submitForm = () => {
    console.log("form submited");
  };

  const resetForm = () => {
    console.log("form reseted");
  };
  return (
    <>
      <div className="app-container">
        <div className="header">
          <div className="options">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license/free Copyright 2025
              Fonticons, Inc.
              <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" />
            </svg>
          </div>
          <div className="navbar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license (Commercial License)
              Copyright 2025 Fonticons, Inc
              <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license/free Copyright 2025
              Fonticons, Inc
              <path d="M136 192C136 125.7 189.7 72 256 72C322.3 72 376 125.7 376 192C376 258.3 322.3 312 256 312C189.7 312 136 258.3 136 192zM48 546.3C48 447.8 127.8 368 226.3 368L285.7 368C384.2 368 464 447.8 464 546.3C464 562.7 450.7 576 434.3 576L77.7 576C61.3 576 48 562.7 48 546.3zM544 160C557.3 160 568 170.7 568 184L568 232L616 232C629.3 232 640 242.7 640 256C640 269.3 629.3 280 616 280L568 280L568 328C568 341.3 557.3 352 544 352C530.7 352 520 341.3 520 328L520 280L472 280C458.7 280 448 269.3 448 256C448 242.7 458.7 232 472 232L520 232L520 184C520 170.7 530.7 160 544 160z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license/free Copyright 2025
              Fonticons, Inc
              <path d="M64 416L64 192C64 139 107 96 160 96L480 96C533 96 576 139 576 192L576 416C576 469 533 512 480 512L360 512C354.8 512 349.8 513.7 345.6 516.8L230.4 603.2C226.2 606.3 221.2 608 216 608C202.7 608 192 597.3 192 584L192 512L160 512C107 512 64 469 64 416z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license/free Copyright 2025
              Fonticons, Inc.
              <path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license/free Copyright 2025
              Fonticons, Inc.
              <path d="M96 160L96 400L544 400L544 160L96 160zM32 160C32 124.7 60.7 96 96 96L544 96C579.3 96 608 124.7 608 160L608 400C608 435.3 579.3 464 544 464L96 464C60.7 464 32 435.3 32 400L32 160zM192 512L448 512C465.7 512 480 526.3 480 544C480 561.7 465.7 576 448 576L192 576C174.3 576 160 561.7 160 544C160 526.3 174.3 512 192 512z" />
            </svg>
          </div>
          <div className="account">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                Font Awesome Free v7.1.0 by @fontawesome -
                https://fontawesome.com License -
                https://fontawesome.com/license/free Copyright 2025 Fonticons,
                Inc.
                <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
              </svg>
              <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license/free Copyright 2025
              Fonticons, Inc.--
              <path d="M569 337C578.4 327.6 578.4 312.4 569 303.1L425 159C418.1 152.1 407.8 150.1 398.8 153.8C389.8 157.5 384 166.3 384 176L384 256L272 256C245.5 256 224 277.5 224 304L224 336C224 362.5 245.5 384 272 384L384 384L384 464C384 473.7 389.8 482.5 398.8 486.2C407.8 489.9 418.1 487.9 425 481L569 337zM224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160z" />
            </svg>
          </div>
        </div>
        <div className="content-container">
          <div className="profile-container">
            <div className="profile-cover"></div>
            <div className="profile-picture">
              <div></div>
            </div>
            <div className="profile-content-container">
              <div className="profile-text">
                <div className="profile-name">Choaib ER-Routbi</div>
                <div className="profile-bio">
                  something about this persone something about this persone  something about this persone something about this persone 
                  something about this persone
                </div>
              </div>
              <div className="profile-options">
                <div className="profile-edit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    Font Awesome Free v7.1.0 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2025
                    Fonticons, Inc.
                    <path d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z" />
                  </svg>
                </div>
                <div className="profile-details">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    Font Awesome Free v7.1.0 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2025
                    Fonticons, Inc
                    <path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="profile-sections-btns">
              <button className="profile-posts-btn">posts</button>
              <button className="profile-photos-btn">photos</button>
              <button className="profile-reels-btn">reels</button>
            </div>
            <div className="profile-sections-container">
              <div className="profile-posts">
                <form>
                  <textarea
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    name="form-post-input"
                    placeholder="type your post text here."
                    className="post-input"
                  ></textarea>
                  <div className="post-input-options">
                    <label htmlFor="input-post-title">title : </label>
                    <input
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      name="form-title-input"
                      placeholder="Post Title ..."
                      id="input-post-title"
                      type="text"
                      className="input-post-Title"
                    ></input>
                    <label htmlFor="input-post-img">image : </label>
                    <input
                      value={postThumb}
                      onChange={e => setPostThumb(e.target.value)}
                      name="form-img-input"
                      placeholder="add an image."
                      id="input-post-img"
                      type="file"
                      className="input-post-img"
                    ></input>
                    <div className="publish-btn-container">
                      <p>you can view ,edit or delete this post later</p>
                      <div className="post-btns-container">
                        <button type="button" onClick={cancelPost} className="cancel-post-btn">
                          cancel
                        </button>
                        <button
                          type="button"
                          onClick={publishPost}
                          className="publish-post-btn"
                        >
                          publish
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="myPosts-container">
                  my posts
                  {
                    posts.length > 0 ? ( posts.map((post,idx)=>(

                    <div key={idx} className="post">
                      <div
                        style={{
                          backgroundImage:post.thumb 
                        }} 
                        className="thumbnail"></div>
                      <div
                        className="post-titleANDtext"
                        style={{ display: "grid" }}
                      >
                        <div className="title">{post.title}</div>
                        <div className="content">{post.text} </div>
                      </div>
                      <div className="post-actions">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                        >
                          Font Awesome Free v7.1.0 by @fontawesome -
                          https://fontawesome.com License -
                          https://fontawesome.com/license/free Copyright 2025
                          Fonticons, Inc
                          <path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z" />
                        </svg>
                      </div>
                    </div>) 
                    )
                  ) : (<div 
                    style={{translate:'45% 600%'}}
                  >no posts</div>)}
                </div>
              </div>
            </div>
            <div className="profile-photos"></div>
            <div className="profile-reels"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
