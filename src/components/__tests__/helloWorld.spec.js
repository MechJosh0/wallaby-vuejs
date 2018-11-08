import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import HelloWorld from '@/components/HelloWorld';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('HelloWorld.vue', () =>
{
	it('renders props.msg when passed', () =>
	{
		const msg = 'new message';
		const wrapper = mount(HelloWorld, {
			localVue,
			propsData: { msg }
		});

		expect(wrapper.text()).toMatch(msg);
	});
});
