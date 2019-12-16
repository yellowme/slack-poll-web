const transcript = (props = {}) => {
  props.title = props.title || 'Awesome Poll'
  props.options = props.options || []
  props.multiple = props.multiple || false
  if (props.options.length <= 0) {
    return null
  }

  let title = `"${props.title}"`
  let options = props.options
    .map(option => `"${option}"`)
    .join(' ')
  let multipleOption = props.multiple ? '-m' : ''
  let pollCommand = `/poll ${title} ${options} ${multipleOption}`.trim()

  return pollCommand
}

export { transcript }
