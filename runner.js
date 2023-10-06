const game = window.game;
if (game!=null) {
    const lev = game.levels;
    const driver = game.driver;
    game.Init();
    if (lev!=null) {
        lev.Init();
    };
    if (driver!=null) {
        driver.Init();
    };
};

