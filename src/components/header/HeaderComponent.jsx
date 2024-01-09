"use client";
import AvatarComponent from "../avatar/AvatarComponent";
import Title from "../typography/Title";
import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import GitHub from "../icons/GitHub";
import Download from "../icons/Download";
import LinkedIn from "../icons/LinkedIn";

const HeaderComponent = () => {
  const downloadHV = () => {
    const rutaHV = "/files/JuanEstebanCastilloMartinez.pdf";
    const link = document.createElement("a");
    link.href = rutaHV;
    link.download = "hoja-de-vida-juan-Esteban-Castillo-Martinez.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="p-5 flex sm:flex-row flex-col gap-4 items-center">
      <AvatarComponent size={150} />
      <header className="flex flex-col items-center sm:items-start gap-1">
        <Title title="Juan Esteban Castillo M" />
        <h2 className="text-xl w-full text-metal-700 text-balance text-center sm:text-left">
          <span aria-label="">
            
          </span>
          .{" "}
          <span
            className="text-primary-400/90 dark:text-yellow-200/90"
            aria-label="Desarrollador y Programador Web."
          >
            Desarrollador y Programador Web
          </span>
          .{" "}
          <span aria-label="Especializado en innovar en sus aplicaciones.">
            Especializado en innovar en sus aplicaciones
          </span>
          .{" "}
        </h2>
        <nav className="flex flex-wrap gap-2">
          <Tooltip showArrow={true} content="GitHub">
            <Button
              as={Link}
              href="https://github.com/Juanes0302"
              target="_blank"
              isIconOnly
              color="primary"
              className="mr-1"
              size="lg"
              variant="flat"
              aria-label="GitHub Repositorio de Juanes0302"
            >
              <GitHub />
            </Button>
          </Tooltip>

          <Tooltip showArrow={true} content="Hoja de Vida">
            <Button
              target="_blank"
              color="secondary"
              endContent={<Download />}
              onClick={downloadHV}
              size="lg"
              variant="flat"
              role="button"
              aria-label="Descargar Hoja de Vida"
            >
              Hoja de vida
            </Button>
          </Tooltip>
        </nav>
      </header>
    </header>
  );
};

export default HeaderComponent;
