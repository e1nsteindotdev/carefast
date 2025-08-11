import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ userId }: { userId: string }) => {
  const patient = await getPatient(userId);
  return (
    <div className="flex w-full">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />
          <p className="copyright mt-10 py-12">© 2024 CarePluse</p>
        </div>
      </section>
    </div>
  );
};

export const NewAppointmentDialog = async ({ userId }: { userId: string }) => {
  return (<DialogContent className="w-full">

    <Appointment userId={userId} />
    {/* <DialogFooter> */}
    {/*   <DialogClose asChild> */}
    {/*     <Button variant="outline">Cancel</Button> */}
    {/*   </DialogClose> */}
    {/*   <Button type="submit">Save changes</Button> */}
    {/* </DialogFooter> */}
  </DialogContent>)
}

