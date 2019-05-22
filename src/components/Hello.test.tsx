import * as React from 'react';
import * as Enzyme from 'enzyme';
import HelloClass from './HelloClass';

it('renders correct text when no enthusiasm level is given', ()=> {
    const hello = Enzyme.shallow(<HelloClass name="Daniel"/>);

    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with enthusiasm level 1', () => {
    const hello = Enzyme.shallow(<HelloClass name="Daniel" enthusiasmLevel={1}/>);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with enthusiasm level 5', () => {
    const hello = Enzyme.shallow(<HelloClass name="Daniel" enthusiasmLevel={5}/>);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});


it('throws when enthusiasm level is 0', () => {
    expect(() => {
        Enzyme.shallow(<HelloClass name='Daniel' enthusiasmLevel={0} />);
      }).toThrow();
});


it('throws when the enthusiasm level is negative', () => {
    expect(() => {
      Enzyme.shallow(<HelloClass name='Daniel' enthusiasmLevel={-1} />);
    }).toThrow();
});