import { LoginForm } from '@/components/LoginForm';
import { PageHeading } from '@/components/PageHeading';

export default function Login() {
  return (
    <section className="m-auto min-w-[480px] py-8">
      <PageHeading>Login</PageHeading>
      <LoginForm />
    </section>
  );
}
