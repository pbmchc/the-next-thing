import { Dialog } from '@/components/Dialog';
import { LoginForm } from '@/components/LoginForm';

export default async function InterceptingLoginRoute() {
  return (
    <Dialog>
      <section className="min-w-[480px] py-8">
        <header className="font-semibold">Login</header>
        <LoginForm />
      </section>
    </Dialog>
  );
}
