const CreateBlog = () => {
    const closePopUp = () => {
        document.querySelector('.create-container').classList.remove('active');
        document.querySelector('.Container').classList.remove('blur');
    }
    return ( 
        <div className="create-container">
            <div className="create-HeaderContainer">
                <h1 className="create-header">Create Blog</h1>
                <button className="closeBtn" onClick={ closePopUp }><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div className="create-body">
                <label>Blog Name</label>
                <input type="text" />
                <label>Blog Content</label>
                <textarea cols="20" rows="10" />
                <label>Author</label>
                <input type="text" />
                <button className="submitBtn">Add</button>
            </div>
        </div>
     );
}
 
export default CreateBlog;