import type { Meta, StoryObj } from '@storybook/vue3'
import Linking from '../components/Linking.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Linking-kwy',
  component: Linking,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    user: { control: 'text', description: 'Github username' },
    repo: { control: 'text', description: 'Github repo' },
  },
} satisfies Meta<typeof Linking>

export default meta

// ------------
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Package: Story = {
  // 默认参数
  args: {
    user: 'kangwuyi',
    repo: 'linking-kwy',
  },
}
