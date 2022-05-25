import Lance from '@/components/Lance';
import { mount } from '@vue/test-utils';

test('Não aceita lances com valor inferior a zero.', () => {
    const wrapper = mount(Lance);
    const input = wrapper.find('input');
    input.setValue(-100);
    const lancesEmitidos = wrapper.emitted('novo-lance');
    wrapper.trigger('submit');
    expect(lancesEmitidos).toBeUndefined();
});

test('Emite um lance quando o valor é superior a zero.', () => {
    const wrapper = mount(Lance);
    const input = wrapper.find('input');
    input.setValue(100);
    wrapper.trigger('submit');
    const lancesEmitidos = wrapper.emitted('novo-lance');
    expect(lancesEmitidos).toHaveLength(1);
});

test('Emite o valor esperado de um lance válido.', () => {
    const wrapper = mount(Lance);
    const input = wrapper.find('input');
    input.setValue(100);
    wrapper.trigger('submit');
    const lancesEmitidos = wrapper.emitted('novo-lance');
    const lance = parseInt(lancesEmitidos[0][0]);
    expect(lance).toBe(100);
})