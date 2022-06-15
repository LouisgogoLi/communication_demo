import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

beforeAll(() => {
  console.log("1. 全域 beforeAll ：全域的第一個順序執行");
});
beforeEach(() => {
  console.log(
    "3. 11. 17. 全域 beforeEach ：每次測試前都會執行，優先度大於區域的"
  );
});
afterAll(() => {
  console.log("24. 全域 afterAll ：全域的最後一個順序執行");
});
afterEach(() => {
  console.log(
    "8. 16. 22. 全域 afterEach ：每次測試後都會執行，優先度低於區域的"
  );
});

describe("HelloWorld.vue測試區域1", () => {
  beforeAll(() => {
    console.log("2. 區域 beforeAll ：區域的第一個順序執行");
  });
  beforeEach(() => {
    console.log("4. 區域 beforeEach ：每次測試前都會執行，優先度低於全域的");
  });
  afterAll(() => {
    console.log("9. 區域 afterAll ：區域的最後一個順序執行");
  });
  afterEach(() => {
    console.log("7. 區域 afterEach ：每次測試後都會執行，優先度大於全域的");
  });

  it("renders props.msg when passed", () => {
    console.log("5. 進入1");
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
    console.log("6. 斷言1");
  });
});

describe("測試區域2", () => {
  beforeAll(() => {
    console.log("10. 區域 beforeAll ：區域的第一個順序執行2");
  });
  beforeEach(() => {
    console.log(
      "12. 18. 區域 beforeEach ：每次測試前都會執行，優先度低於全域的2"
    );
  });
  afterAll(() => {
    console.log("23. 區域 afterAll ：區域的最後一個順序執行2");
  });
  afterEach(() => {
    console.log(
      "15. 21. 區域 afterEach ：每次測試後都會執行，優先度大於全域的2"
    );
  });

  it("測試最小單位1", () => {
    console.log("13. 進入2");
    console.log("14. 斷言2");
  });
  it("測試最小單位2", () => {
    console.log("19. 進入3");
    console.log("20. 斷言3");
  });
});
