const fs = require('fs');
const path = require('path');

function patch(filePath, transform) {
  const absPath = path.resolve(filePath);
  let content = fs.readFileSync(absPath, 'utf8');
  const updated = transform(content);
  if (updated !== content) {
    fs.writeFileSync(absPath, updated, 'utf8');
    console.log(`Patched ${filePath}`);
  } else {
    console.log(`No changes for ${filePath}`);
  }
}

patch('src/components/StaggeredMenu.jsx', text => {
  const replacements = [
    [
      /const plusHRef = useRef\(null\);\s*\nconst plusVRef = useRef\(null\);\s*\n/g,
      ''
    ],
    [
      /const plusH = plusHRef\.current;\s*\nconst plusV = plusVRef\.current;\s*\n/g,
      ''
    ],
    [
      /if \(!panel \|\| !plusH \|\| !plusV \|\| !icon \|\| !textInner\) return;/,
      'if (!panel || !icon || !textInner) return;'
    ],
    [
      /gsap\.set\(plusH, \{ transformOrigin: '50% 50%', rotate: 0 \}\);\s*\ngsap\.set\(plusV, \{ transformOrigin: '50% 50%', rotate: 90 \}\);/,
      ''
    ],
    [
      /const animateIcon = useCallback\(opening => \{[\s\S]*?\}, \[\]\);/,
      'const animateIcon = useCallback(() => {}, []);'
    ],
    [
      /<span ref=\{iconRef\} className="sm-icon" aria-hidden="true">[\s\S]*?<\/span>/,
      `<span ref={iconRef} className="sm-icon" aria-hidden="true">
            <span className="sm-icon-line top" />
            <span className="sm-icon-line middle" />
            <span className="sm-icon-line bottom" />
          </span>`
    ],
  ];

  for (const [from, to] of replacements) {
    text = text.replace(from, to);
  }

  return text;
});

patch('src/components/StaggeredMenu.css', text => {
  const rules = [
    [ /padding: 2em;/, 'padding: 1.25rem;' ],
    [ /color: #e9e9ef;/, 'color: #E3B54C;' ],
    [ /background: white;\s*\n  backdrop-filter: blur\(12px\);\s*\n  -webkit-backdrop-filter: blur\(12px\);/, 'background: rgba(7, 11, 24, 0.96);\n  border-left: 1px solid rgba(255,255,255,0.08);' ],
    [ /opacity: 0;/, 'opacity: 1;' ],
    [ /color: #000;/, 'color: #fff;' ],
    [ /color: #111;/, 'color: #fff;' ],
  ];
  for (const [from, to] of rules) {
    text = text.replace(from, to);
  }

  if (!text.includes('.sm-icon {')) {
    const insert = `
.sm-icon {
  position: relative;
  width: 22px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sm-icon-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 999px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.sm-icon-line.top { top: 0; }
.sm-icon-line.middle { top: 50%; transform: translateY(-50%); }
.sm-icon-line.bottom { bottom: 0; }

.staggered-menu-wrapper[data-open] .sm-icon-line.top { transform: translateY(8px) rotate(45deg); }
.staggered-menu-wrapper[data-open] .sm-icon-line.middle { opacity: 0; }
.staggered-menu-wrapper[data-open] .sm-icon-line.bottom { transform: translateY(-8px) rotate(-45deg); }
`;
    const pos = text.indexOf('.sm-panel-itemWrap');
    if (pos !== -1) {
      text = text.slice(0, pos) + insert + text.slice(pos);
    } else {
      text += insert;
    }
  }

  if (!text.includes('box-shadow: 0 10px 30px rgba(227,181,76,0.18);')) {
    // no-op
  }

  return text;
});

patch('src/components/FloatingLines.jsx', text => {
  text = text.replace(/const float LINE_BRIGHTNESS_FACTOR = [0-9.]+;/, 'const float LINE_BRIGHTNESS_FACTOR = 0.14;');
  text = text.replace(/vec3 background_color\(vec2 uv\) \{[\s\S]*?\}/, 'vec3 background_color(vec2 uv) {\n  return vec3(7.0, 11.0, 24.0) / 255.0;\n}');
  return text;
});

patch('src/App.jsx', text => {
  return text.replace('mixBlendMode="screen"', 'mixBlendMode="normal"');
});

patch('src/assets/site.css', text => {
  text = text.replace('--navy:#070b18;', '--navy:#05070f;');
  text = text.replace('--navy-deep:#050713;', '--navy-deep:#02040a;');
  text = text.replace('  padding-top:clamp(40px,6vw,72px);', '  padding-top:clamp(32px,5vw,56px);');
  text = text.replace('  background:rgba(26,31,71,0.78);\n  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);\n  border-bottom:1px solid var(--navy-line);',
      '  background: rgba(7, 11, 24, 0.92);\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n  border-bottom:1px solid rgba(255,255,255,0.08);');
  return text;
});
