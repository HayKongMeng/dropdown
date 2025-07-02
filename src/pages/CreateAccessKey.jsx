import { useState } from "react";
import CreateAccessKeyModal from "../components/CreateAccessKeyModal";
import { Button } from "../components/ui/Button";

export default function CreateAccessKey() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 font-nunito-sans">
      <div className="text-center max-w-full">
        <Button
          onClick={() => setModalOpen(true)}
          className="bg-[#3773d5] hover:bg-blue-600 text-white font-extrabold text-lg px-8 py-3 h-auto rounded-lg"
        >
          Create Access Key
        </Button>
      </div>

      <CreateAccessKeyModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
