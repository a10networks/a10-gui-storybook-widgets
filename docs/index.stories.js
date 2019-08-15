import * as React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { withReadme, withDocs } from 'storybook-readme'
const version = 'v1.7.0'

import '../src/index.less'
import './index.less'

import createAffixStory from './Affix/index.story'
import createAlertStory from './Alert/index.story'
import createAnchorStory from './Anchor/index.story'
import createAutoCompleteStory from './AutoComplete/index.story'
import createAvatarStory from './Avatar/index.story'
import createBackTopStory from './BackTop/index.story'
import createBadgeStory from './Badge/index.story'
import createBreadcrumbStory from './Breadcrumb/index.story'
import createButtonStory from './Button/index.story'
import createCalendarStory from './Calendar/index.story'
import createCardStory from './Card/index.story'
import createCarouselStory from './Carousel/index.story'
import createCascaderStory from './Cascader/index.story'
import createChartStory from './Chart/index.story'
import createCheckboxStory from './Checkbox/index.story'
import createCommentStory from './Comment/index.story'
import createCollapseStory from './Collapse/index.story'
import createCompoundConfigList from './CompoundConfigList/index.story'
import createCompoundTable from './CompoundTable/index.story'
import createConfigListStory from './ConfigList/index.story'
import createConfigProviderStory from './ConfigProvider/index.story'
import createContextMenuStory from './ContextMenu'
import createDatatableStory from './Datatable/index.story'
import createDatePickerStory from './DatePicker'
import createDescriptionsStory from './Descriptions'
import createDiffStory from './Diff/index.story'
import createDividerStory from './Divider/index.story'
import createDrawerStory from './Drawer/index.story'
import createDropdownStory from './Dropdown'
import createDropdownMenuStory from './DropdownMenu/index.story'
import createErrorPageStory from './ErrorPage/index.story'
import createExplorerStory from './Explorer'
import createFilterTreeStory from './FilterTree/index.story'
import createFormStory from './Form'
import createGridStory from './Grid/index.story'
import createIconStory from './Icon'
import createInputStory from './Input'
import createInputNumberStory from './InputNumber/index.story'
import createLayoutStory from './Layout'
import createListStory from './List/index.story'
import createListInputStory from './ListInput/index.story'
import createMentionStory from './Mention'
import createMentionsStory from './Mentions'
import createMenuStory from './Menu/index.stories'
import createMenuPopoverStory from './MenuPopover/index.story'
import createMessageStory from './Message/index.story'
import createMultiGroupSelectStory from './MultiGroupSelect/index.story'
import createMultiSearchStory from './MultiSearch/index.story'
import createNotificationStory from './Notification/index.story'
import createPageHeaderStory from './PageHeader'
import createPaginationStory from './Pagination/index.story'
import createPopconfirmStory from './Popconfirm/index.story'
import createPopoverStory from './Popover/index.story'
import createProgressStory from './Progress'
import createRadioStory from './Radio/index.story'
import createRateStory from './Rate'
import createSearchableSelectorStory from './SearchableSelector/index.story'
import createSearchbarStory from './SearchBar'
import createSelectStory from './Select/index.story'
import createSkeletonStory from './Skeleton/index.story'
import createSliderStory from './Slider'
import createSlidingPageStory from './SlidingPage/index.story'
import createSpinStory from './Spin/index.story'
import createStepsStory from './Steps/index.story'
import createSwitchStory from './Switch'
import createTableStory from './Table'
import createTabsStory from './Tabs/index.story'
import createTagStory from './Tag'
import createTimelineStory from './Timeline/index.story'
import createTimePickerStory from './TimePicker'
import createTreeStory from './Tree/index.story'
import createTreeSelectStory from './TreeSelect'
import createTooltipStory from './Tooltip/index.story'
import createTransferStory from './Transfer/index.story'
import createTypographyStory from './Typography'
import createUploadStory from './Upload/index.story'
import createModalStory from './Modal/index.story'
import createLocaleProviderStory from './LocaleProvider/index.story'
import createLogFilterBarStory from './Log/filterbar.story'
import createLogSearchBarStory from './Log/searchbar.story'
import createDNDTableStory from './DnDTable/index.story'
import createDNDBasicStory from './DnDBasic/index.story'
import createMultiItemBasicStory from './MultiItem/index.story'
import createIntroductionStory from './Introduction.story'
import createSummaryStory from './Summary/index.story'

const widgetStory = storiesOf(`A10 Widgets (${version})/Welcome`, module)
createIntroductionStory(widgetStory)
createSummaryStory(widgetStory)

const generalWidgets = storiesOf(`A10 Widgets (${version})/General`, module)
createButtonStory(generalWidgets)
createIconStory(generalWidgets)
createTypographyStory(generalWidgets)

const layoutWidgets = storiesOf(`A10 Widgets (${version})/Layout`, module)
createGridStory(layoutWidgets)
createLayoutStory(layoutWidgets)

const navigationWidgets = storiesOf(
  `A10 Widgets (${version})/Navigation`,
  module,
)
createAffixStory(navigationWidgets)
createBreadcrumbStory(navigationWidgets)
createDropdownStory(navigationWidgets)
createDropdownMenuStory(navigationWidgets)
createExplorerStory(navigationWidgets)
createMenuStory(navigationWidgets)
createMenuPopoverStory(navigationWidgets)
createPageHeaderStory(navigationWidgets)
createPaginationStory(navigationWidgets)
createStepsStory(navigationWidgets)

const dataEntryWidgets = storiesOf(
  `A10 Widgets (${version})/Data Entry`,
  module,
)
createAutoCompleteStory(dataEntryWidgets)
createCheckboxStory(dataEntryWidgets)
createCascaderStory(dataEntryWidgets)
createCompoundConfigList(dataEntryWidgets)
createCompoundTable(dataEntryWidgets)
createConfigListStory(dataEntryWidgets)
createDatePickerStory(dataEntryWidgets)
createFilterTreeStory(dataEntryWidgets)
createFormStory(dataEntryWidgets)
createInputNumberStory(dataEntryWidgets)
createInputStory(dataEntryWidgets)
createListInputStory(dataEntryWidgets)
createMentionStory(dataEntryWidgets)
createMentionsStory(dataEntryWidgets)
createMultiGroupSelectStory(dataEntryWidgets)
createRateStory(dataEntryWidgets)
createRadioStory(dataEntryWidgets)
createSwitchStory(dataEntryWidgets)
createSliderStory(dataEntryWidgets)
createSelectStory(dataEntryWidgets)
createTreeSelectStory(dataEntryWidgets)
createTransferStory(dataEntryWidgets)
createTimePickerStory(dataEntryWidgets)
createUploadStory(dataEntryWidgets)

const dataDisplayWidgets = storiesOf(
  `A10 Widgets (${version})/Data Display`,
  module,
)
createAvatarStory(dataDisplayWidgets)
createBadgeStory(dataDisplayWidgets)
createCardStory(dataDisplayWidgets)
createCarouselStory(dataDisplayWidgets)
createCalendarStory(dataDisplayWidgets)
createChartStory(dataDisplayWidgets)
createCommentStory(dataDisplayWidgets)
createContextMenuStory(dataDisplayWidgets)
createCollapseStory(dataDisplayWidgets)
createDatatableStory(dataDisplayWidgets)
createDescriptionsStory(dataDisplayWidgets)
createDiffStory(dataDisplayWidgets)
createDNDTableStory(dataDisplayWidgets)
createDNDBasicStory(dataDisplayWidgets)
createListStory(dataDisplayWidgets)
createLogFilterBarStory(dataDisplayWidgets)
createLogSearchBarStory(dataDisplayWidgets)
createMultiItemBasicStory(dataDisplayWidgets)
createMultiSearchStory(dataDisplayWidgets)
createPopoverStory(dataDisplayWidgets)
createSearchableSelectorStory(dataDisplayWidgets)
createSearchbarStory(dataDisplayWidgets)
createTableStory(dataDisplayWidgets)
createTabsStory(dataDisplayWidgets)
createTagStory(dataDisplayWidgets)
createTimelineStory(dataDisplayWidgets)
createTooltipStory(dataDisplayWidgets)
createTreeStory(dataDisplayWidgets)

const feedbackWidget = storiesOf(`A10 Widgets (${version})/Feedback`, module)
createAlertStory(feedbackWidget)
createDrawerStory(feedbackWidget)
createModalStory(feedbackWidget)
createMessageStory(feedbackWidget)
createNotificationStory(feedbackWidget)
createProgressStory(feedbackWidget)
createPopconfirmStory(feedbackWidget)
createSlidingPageStory(feedbackWidget)
createSpinStory(feedbackWidget)
createSkeletonStory(feedbackWidget)

const otherWidget = storiesOf(`A10 Widgets (${version})/Other`, module)
createAnchorStory(otherWidget)
createBackTopStory(otherWidget)
createConfigProviderStory(otherWidget)
createDividerStory(otherWidget)
createErrorPageStory(otherWidget)
createLocaleProviderStory(otherWidget)
