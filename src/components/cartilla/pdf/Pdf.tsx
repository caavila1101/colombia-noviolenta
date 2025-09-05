import type { FC } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import type { TransformToolbarSlot } from "@react-pdf-viewer/toolbar";

interface PdfViewerProps {
  fileUrl: string;
  height?: string;
}

const PdfViewer: FC<PdfViewerProps> = ({ fileUrl, height = "750px" }) => {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar, renderDefaultToolbar } = toolbarPluginInstance;

  const transform: TransformToolbarSlot = (slot) => ({
    ...slot,
    Download: () => <></>,
  });

  return (
    <div style={{ height }}>
      <Worker workerUrl="/pdf.worker.min.js">
        <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
        <Viewer fileUrl={fileUrl} plugins={[toolbarPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
