# juice-pay-js

💰 Add a "Pay with Juicebox" button to your website.

## WARNING not updated for Juicebox V3. Only use with Juicebox V2

> Juicebox V1 projects not supported (yet).

## Usage

1. Add a `<script>` tag to your website.

   ```html
   <script src="https://tools.juicebox.money/pay.js"></script>
   ```

2. Set the `data-project-id` attribute to your Juicebox project's ID.

   ```diff
   <script
     src="https://tools.juicebox.money/pay.js"
   + data-project-id="123"
   ></script>
   ```

3. Add a mount point for the "Pay with Juicebox" button to your website.
   Set the `id` attribute of the element to `juice-pay-button`. The "Pay with Juicebox" button will be rendered here.

   ```diff
   + <div id="juice-pay-button"></div>
   ```

### Customization

Add your own flavor to `juice-pay-js` with customizations.
Set the following HTML `data` attributes on your `<script>` tag to customize your popup's appearance.

#### `title`

Set the popup's title.

```html
<script
  src="https://tools.juicebox.money/pay.js"
  data-title="Fund my project"
></script>
```

#### `description`

Set the popup's description text. Defaults to no text.

```html
<script
  src="https://tools.juicebox.money/pay.js"
  data-description="Fund my project. Your donation will be used to keep the juice flowing."
></script>
```

#### `avatar-url`

Set the popup's avatar. Defaults to the Juicebox project's logo.

```html
<script
  src="https://tools.juicebox.money/pay.js"
  data-description="Fund my project. Your donation will be used to keep the juice flowing."
></script>
```

#### `trigger-button-text`

Set the trigger button's inner text. Defaults to **'Pay with Juicebox'**.

```html
<script
  src="https://tools.juicebox.money/pay.js"
  data-trigger-button-text="Donate now"
></script>
```

#### `trigger-button-class`

Add CSS classes to the trigger button.

```html
<script
  src="https://tools.juicebox.money/pay.js"
  data-trigger-button-class="juicebox-button"
></script>
```

#### `trigger-button-style`

Set the trigger button's HTML `style` attribute.

```html
<script
  src="https://tools.juicebox.money/pay.js"
  data-trigger-button-style="padding: 1rem; background-color: 'blue'; color:"
></script>
```

#### `trigger-button-selector`

Set the trigger button's mount point selector.

```html
<script
  src="https://tools.juicebox.money/pay.js"
  data-trigger-button-style=".my-custom-juicebox-button-selector"
></script>
```

#### `pay-button-text`

Set the pay button's inner text. Defaults to **'Pay now'**.

```html
<script
  src="https://tools.juicebox.money/pay.js"
  data-pay-button-text="Add juice"
></script>
```

#### `network-name`

Set the Ethereum network to use. Chose from the following options:

- `mainnet`
- `rinkeby`

Defaults to **`mainnet`**.

```html
<script
  src="https://tools.juicebox.money/pay.js"
  data-network-name="rinkeby"
></script>
```
