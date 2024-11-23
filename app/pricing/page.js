import { title } from "@/components/primitives";
import {Image} from "@nextui-org/image";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Input} from "@nextui-org/input";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <Image
      width={300}
      alt="NextUI hero Image"
      src="https://nextui.org/images/hero-card-complete.jpeg"
    />
    <ButtonGroup>
    <Button color="primary"  className="color-button">
      Button
    </Button>
    </ButtonGroup>
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
    </div>
  );
}
