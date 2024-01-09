"use client";
import { Button, Snippet, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import GitHub from "../icons/GitHub";

const ContactComponent = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center p-3">
      <Tooltip showArrow={true} content="GitHub">
        <Button
          as={Link}
          href="https://github.com/Juanes0302"
          target="_blank"
          color="primary"
          className="mr-1"
          size="lg"
          variant="ghost"
          startContent={<GitHub />}
          aria-label="GitHub Repositorio de Juanes0302"
        >
          GitHub
        </Button>
      </Tooltip>

      <Tooltip showArrow={true} content="juanescastillo30@gmail.com">
        <Snippet
          symbol=""
          variant="bordered"
          size="md"
          color="secondary"
          tooltipProps={{
            content: "Copiar email",
          }}
          aria-label="Correo electrónico de Juan Esteban Castillo"
        >
          <a href="mailto:juanescastillo30@gmail.com">juanescastillo30@gmail.com</a>
        </Snippet>
      </Tooltip>
    </div>
  );
};

export default ContactComponent;
