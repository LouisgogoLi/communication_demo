import { mount } from "@vue/test-utils";
import PropsAndEmit from "@/views/propsAndEmit/PropsAndEmit.vue";

describe("測試PropsAndEmit元件", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(PropsAndEmit, {});
  });
  it("測試TitleBar元件click是否正常觸發", async () => {
    expect(wrapper.vm.bIsOpen).toBe(true);
    await wrapper.find('[data-test="titlebar_title"]').trigger("click");
    expect(wrapper.vm.bIsOpen).toBe(false);
    await wrapper.find('[data-test="titlebar_title"]').trigger("click");
    expect(wrapper.vm.bIsOpen).toBe(true);
  });
});
