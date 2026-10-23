import sys

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the script section
old_start = '  <!-- ==========================================================================\n       JAVASCRIPT: COMPREHENSIVE CONFIGURATION & LOGIC\n       ========================================================================== -->\n  <script>'
old_end = '  </script>\n</body>'

start_idx = content.find(old_start)
end_idx = content.find(old_end)

if start_idx >= 0 and end_idx >= 0:
    replacement_lines = [
        '  <!-- ==========================================================================',
        '       JAVASCRIPT: External Scripts (Split for Maintainability)',
        '       ========================================================================== -->',
        '  <!-- Portfolio Data Configuration -->',
        '  <script src="js/data.js"></script>',
        '  <!-- Main Application Logic -->',
        '  <script src="js/app.js"></script>',
        '</body>',
    ]
    replacement = '\n'.join(replacement_lines)
    
    new_content = content[:start_idx] + replacement + content[end_idx + len(old_end):]
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Script block replaced with external references successfully!')
else:
    print(f'NOT FOUND: start={start_idx}, end={end_idx}')
    sys.exit(1)
