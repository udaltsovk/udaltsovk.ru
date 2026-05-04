{pkgs ? import <nixpkgs> {}}: let
  packages = with pkgs; [
    bun
  ];
in
  with pkgs;
    mkShell {
      name = "udaltsovk.ru";
      buildInputs = packages;

      DIRENV_LOG_FORMAT = "";
    }
