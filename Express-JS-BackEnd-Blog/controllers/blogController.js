const createBlog = (req, res) => {
    res.status(200).json({message:"Blog created successfully"});
};

const readBlog = (req, res) => {
    res.status(200).json({message:"Blog read successfully"});
};

const updateBlog = (req, res) => {
    res.status(200).json({message:"Blog updated successfully"});
};

const deleteBlog = (req, res) => {
    res.status(200).json({message:"Blog delete successfully"});
};

module.exports = {createBlog, readBlog, updateBlog, deleteBlog}








