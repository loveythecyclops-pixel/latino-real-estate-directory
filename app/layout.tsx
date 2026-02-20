<!-- AI Home Finder Widget -->
<script>
(function() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://comfort-home-ai.lovable.app/widget';
  iframe.style.cssText = 'position:fixed;bottom:0;right:0;width:420px;height:100vh;border:none;z-index:9999;pointer-events:none;background:transparent;';
  iframe.onload = function() { iframe.style.pointerEvents = 'auto'; };
  document.body.appendChild(iframe);
})();
</script>
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
