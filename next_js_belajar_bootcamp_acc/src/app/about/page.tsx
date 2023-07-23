export const metadata = {
  title: "About Us",
};
import { Container } from "@components";
export default function About() {
  return (
    <Container>
      <div className="flex flex-1 justify-center items-center min-h-screen">
        <h1 className="text-6xl font-bold">About Us</h1>
      </div>
    </Container>
  );
}
