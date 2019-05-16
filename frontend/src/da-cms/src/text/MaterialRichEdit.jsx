import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft'
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter'
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined'
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FormatListBulletedRounded from '@material-ui/icons/FormatListBulletedRounded'
import FormatListNumbered from '@material-ui/icons/FormatListNumbered'
import Link from '@material-ui/icons/Link'
import Image from '@material-ui/icons/Image'
import StrikethroughS from '@material-ui/icons/StrikethroughS'
import Videocam from '@material-ui/icons/Videocam'

import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

const styles = theme => ({
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${theme.spacing.unit}px 0`,
    background: theme.palette.background.default,
  },
})

class MaterialRichEdit extends React.Component {
  state = {
    alignment: 'left',
    formats: ['bold'],
  }

  handleFormat = (event, formats) => this.setState({ formats })

  handleAlignment = (event, alignment) => this.setState({ alignment })

  render() {
    const { classes } = this.props
    const { alignment, formats } = this.state

    return (
      <div className={classes.toggleContainer}>
        <ToggleButtonGroup value={alignment} exclusive onChange={this.handleAlignment}>
          <ToggleButton value="left">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup value={formats} onChange={this.handleFormat}>
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="strikethrough">
            <StrikethroughS/>
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup>
        <ToggleButton value="color">
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
          <ToggleButton value="bulleted" >
            <FormatListBulletedRounded/>
          </ToggleButton>
          <ToggleButton value="numbered" >
            <FormatListNumbered/>
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup>
          <ToggleButton value="link" >
            <Link/>
          </ToggleButton>
          <ToggleButton value="image" >
            <Image/>
          </ToggleButton>
          <ToggleButton value="video" >
            <Videocam/>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    )
  }
}

MaterialRichEdit.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MaterialRichEdit)