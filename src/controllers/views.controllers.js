import Usuario from "../models/Usuario.models.js";

export const viewHome = (req, res) => {
    res.render("home", {
        viewhome: true,
    });
};

export const viewUsuarios = async (req, res) => {
    let usuarios = await Usuario.findAll();
    res.render("usuarios", {
        usuarios,
        viewUsuarios: true,
    });
};
