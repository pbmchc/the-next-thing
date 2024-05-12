import { PageHeading } from '@/components/PageHeading';
import { RegisterForm } from '@/components/RegisterForm';

export default function Register() {
  return (
    <section className="m-auto min-w-[480px] py-8">
      <PageHeading>Register</PageHeading>
      <RegisterForm />
    </section>
  );
}
