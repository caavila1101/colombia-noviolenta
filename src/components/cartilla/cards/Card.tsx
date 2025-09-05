import * as React from "react";
import "./Card.css";
import { useState } from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";

interface BenefitCardProps {
  title: string;
  subtitle?: string; 
  imageSrc: string;
  modalContent: React.ReactNode;
  width?: number;    
  minHeight?: number; 
  className?: string; 
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  subtitle,
  imageSrc,
  modalContent,
  width = 320,
  minHeight = 280,
  className,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card 
        sx={{ minHeight: `${minHeight}px`, width: `${width}px` }}
        className={`benefit-card ${className || ""}`}  
      >
        <CardCover>
          <img
            src={imageSrc}
            loading="lazy"
            alt={title}
            style={{ objectFit: "cover" }}
          />
        </CardCover>

        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />

        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {title}
          </Typography>
          {subtitle && (
            <Typography textColor="neutral.300">{subtitle}</Typography>
          )}

          <Button
            variant="soft"
            color="primary"
            onClick={() => setOpen(true)}
            sx={{ mt: 1 }}
          >
            Más información
          </Button>
        </CardContent>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          color="neutral"
          layout="center"
          variant="outlined"
        >
          <ModalClose />
          {modalContent}
        </ModalDialog>
      </Modal>
    </>
  );
};

export default BenefitCard;
