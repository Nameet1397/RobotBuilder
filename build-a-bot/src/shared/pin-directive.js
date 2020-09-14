function applyStyle(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

export default {
  bind: (element, binding) => {
    // console.log('arg:', binding.arg, 'modifiers:', binding.modifiers);
    // if (binding.arg !== 'position') return;

    // Object.keys(binding.modifiers).forEach((key) => {
    //   element.style[key] = '5px';
    // });
    // element.style.bottom = '5px';
    // element.style.right = '5px';
    applyStyle(element, binding);
  },
  update: (element, binding) => {
    applyStyle(element, binding);
  },
};
