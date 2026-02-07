const getSingleUser = (req, res) => {
    const requestedUserId = req.params.userId;

    res.status(200).json({
        message: `You requested data for user with ID: ${requestedUserId}`,
    });
}

module.exports = {getSingleUser};