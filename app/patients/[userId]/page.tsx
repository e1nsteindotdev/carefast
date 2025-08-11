
import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

import { NewAppointmentDialog } from "./NewAppointmentDialog";


const AdminPage = async ({ params: { userId } }: SearchParamProps) => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
      </header>

      <main className="admin-main">
        <section className="flex w-full justify-between">
          <div className='space-y-4'>
            <h1 className="header">Welcome 👋</h1>
            <p className="text-dark-700">
              Manage all of your appointments here.
            </p>
          </div>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button className="bg-[#FFCF02] text-black">Request a new Appointment now</Button>
              </DialogTrigger>
            </form>
            <NewAppointmentDialog userId={userId} />
          </Dialog>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
