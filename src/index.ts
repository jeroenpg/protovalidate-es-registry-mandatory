import { createValidator } from "@bufbuild/protovalidate";
import { create, createMutableRegistry } from "@bufbuild/protobuf";
import { PersonSchema } from "./foo_pb";
import { PersonSchema as WorksFineSchema } from "./worksfine_pb";

// Fails
try {
  console.log("1");
  const v = createValidator();      
  v.validate(PersonSchema, create(PersonSchema, {
    name: "John Doe",
    address: {
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      postalCode: "12345"
    }
  }));
} catch (e) {
  console.error(e);
}

// Succeeds
try {
  console.log("2");
  const registry = createMutableRegistry(PersonSchema.file)
  const v = createValidator({
    registry
  });      
  v.validate(PersonSchema, create(PersonSchema, {
    name: "John Doe",
    address: {
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      postalCode: "12345"
    }
  }));
} catch (e) {
  console.error(e);
}


// Succeeds
try {
  console.log("3");
  const v = createValidator();      
  v.validate(WorksFineSchema, create(WorksFineSchema, {
    name: "John Doe",
    address: {
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      postalCode: "12345"
    }
  }));
} catch (e) {
  console.error(e);
}

