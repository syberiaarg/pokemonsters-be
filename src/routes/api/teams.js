import TeamController from "../../controllers/teams";

export default (router) => {
    router.route("/")
        .get(UserController.fetch)
        .post(UserController.create);
    router.route("/:id").get(UserController.fetchOne);

    return router;
};
