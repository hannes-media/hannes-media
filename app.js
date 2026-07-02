// Hannes Media — Interactive Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Header Scroll Behavior
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Metric Counter Animation
    const metricsSection = document.getElementById('record');
    const counters = [
        { id: 'val-rev', target: 40, prefix: '$', suffix: 'M+' },
        { id: 'val-leads', target: 6, prefix: '', suffix: 'M+' },
        { id: 'val-imp', target: 2.5, prefix: '', suffix: 'B+' }
    ];

    let animated = false;

    const animateCounters = () => {
        if (animated) return;
        
        counters.forEach(counter => {
            const el = document.getElementById(counter.id);
            if (!el) return;

            let start = 0;
            const end = counter.target;
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const updateNumber = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out cubic
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                const currentVal = (start + (end - start) * easeProgress);

                if (end % 1 === 0) {
                    el.textContent = `${counter.prefix}${Math.floor(currentVal)}${counter.suffix}`;
                } else {
                    el.textContent = `${counter.prefix}${currentVal.toFixed(1)}${counter.suffix}`;
                }

                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                } else {
                    el.textContent = `${counter.prefix}${end}${counter.suffix}`;
                }
            };

            requestAnimationFrame(updateNumber);
        });

        animated = true;
    };

    // Intersection Observer to trigger counters on scroll
    const observerOptions = {
        root: null,
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (metricsSection) {
        observer.observe(metricsSection);
    }

    // 4. Case Studies Data (Injected instantly for zero-latency loading)
    const caseStudies = {
        ozoneair: {
            title: "From 0% to 66% Market Share: How We Built a Dominant Air Purifier Brand",
            tag: "Meta Ads · E-Commerce · Air Quality",
            metrics: [
                { label: "Market Share", val: "66%" },
                { label: "Average ROAS", val: "8.63x" },
                { label: "Sales Scaled", val: "$24.8M+" }
            ],
            body: `
                <h3>The Challenge</h3>
                <p>Ozoneair entered the highly competitive Swedish air purification market with zero brand awareness. A well-funded competitor launched a high-profile celebrity awareness campaign, threatening to capture the market before Ozoneair could get off the ground.</p>
                
                <h3>The Strategy</h3>
                <p>Instead of copying the competitor's high-risk, awareness-first approach, we deployed a systematic direct-response system. We built the campaign around <strong>The Attention Dominance Framework</strong>, focusing heavily on landing page CRO, split-testing conversion paths, and deploying the 6-Biases psychological angles.</p>
                
                <h3>Operational Breakdown</h3>
                <ul>
                    <li><strong>Creative Velocity:</strong> Tested over 120 ad angles focusing on air quality, health, and allergy relief, utilizing AI-assisted rapid copy and lifestyle assets.</li>
                    <li><strong>Funnel Optimization:</strong> Built custom, high-consideration landing pages that explained the technology simply, leading to a 3x higher conversion rate than the competitor.</li>
                    <li><strong>Scaling Architecture:</strong> Scaled daily ad spend to over $2,000 consistently for four years without account fatigue, using Meta's broad targeting.</li>
                </ul>

                <h3>The Results</h3>
                <p>Over a 48-month period, Ozoneair grew from sub-1% to an industry-dominating <strong>66% market share</strong>. The direct-response strategy generated $24.8M+ in tracked revenue, scaling the brand into an eight-figure powerhouse.</p>
            `
        },
        repello: {
            title: "0 to 10,000+ Units for Repello in 8 Months",
            tag: "Meta Ads · E-Commerce · Sweden",
            metrics: [
                { label: "Units Sold", val: "10,000+" },
                { label: "Tracked Revenue", val: "kr10M+" },
                { label: "Market Position", val: "#1" }
            ],
            body: `
                <h3>The Challenge</h3>
                <p>Repello, an ultrasonic pest repeller, was a new product launch. The goal was to secure rapid market entry, build immediate cash flow, and clear multiple inventory batches in under a year.</p>
                
                <h3>The Strategy</h3>
                <p>We designed the campaign using a <strong>velocity-first structure</strong>. By targeting urgent consumer pain points (seasonal pests) and deploying high-impact, direct-response video hooks, we triggered emotional, high-intent purchases immediately.</p>
                
                <h3>Operational Breakdown</h3>
                <ul>
                    <li><strong>Direct-Response Hooks:</strong> Structured video ads showcasing immediate efficacy and utility.</li>
                    <li><strong>Scarcity & Social Proof:</strong> Integrated real-time reviews and countdown stock timers on product pages to drive conversion.</li>
                    <li><strong>Sandbox Testing:</strong> Kept a separate campaign open for weekly creative refinement to discover winning video formats.</li>
                </ul>

                <h3>The Results</h3>
                <p>Repello went from a blank slate to Sweden's #1 ultrasonic repeller in 8 months, selling over 10,000 units and generating kr10M+ in revenue, selling out inventory multiple times.</p>
            `
        },
        pluggsmart: {
            title: "5.15 Million Leads for Education Platform",
            tag: "Snap & Meta · AI SaaS · Lead Gen",
            metrics: [
                { label: "Total Leads", val: "5.15M" },
                { label: "Cost Per Lead", val: "$0.20" },
                { label: "Duration", val: "36 Months" }
            ],
            body: `
                <h3>The Challenge</h3>
                <p>Pluggsmart (formerly Provlyft) needed to scale user acquisition for its AI-driven academic preparation app. The unit economics required acquisition costs to remain extremely low to maintain venture-scale profitability.</p>
                
                <h3>The Strategy</h3>
                <p>We moved away from generic "study helper" slogans. Instead, we built a psychological matrix mapping student anxieties, peer pressure, and exam success. We pushed distribution across Snapchat and Meta, utilizing organic-style user-generated content (UGC) scripts.</p>
                
                <h3>Operational Breakdown</h3>
                <ul>
                    <li><strong>Psychological Angles:</strong> Implemented snap/TikTok scripts focusing on the fear of missing out and exam day anxiety.</li>
                    <li><strong>Automated Nurturing:</strong> Connected Facebook Lead Ads directly to a custom automated welcome and trial flow.</li>
                    <li><strong>Targeting Refinement:</strong> Leveraged lookalike audiences based on high-performing student cohorts.</li>
                </ul>

                <h3>The Results</h3>
                <p>Acquired 5.15M highly qualified leads over three years at an average CPL of just $0.20, establishing Pluggsmart as the primary digital prep app in its target market.</p>
            `
        },
        retreat: {
            title: "€0 to €300,000 Booking Engine in 10 Months",
            tag: "System · SEO · High Ticket",
            metrics: [
                { label: "ROI on Spend", val: "3030%" },
                { label: "Total Revenue", val: "€300K" },
                { label: "Ad Spend", val: "€9,900" }
            ],
            body: `
                <h3>The Challenge</h3>
                <p>A premium wellness retreat center in Europe wanted to fill high-ticket (€2,500+) booking slots. They had no brand footprint and a minimal marketing budget of €9,900.</p>
                
                <h3>The Strategy</h3>
                <p>High-ticket retreat bookings cannot be closed on a single ad click. We built a <strong>Full-Funnel Trust Architecture</strong>. Ads drove traffic to a premium, long-form educational landing page. Once captured, leads were nurtured via a multi-stage automated chatbot and email flow.</p>
                
                <h3>Operational Breakdown</h3>
                <ul>
                    <li><strong>Content Authority:</strong> Positioned the retreat leaders through editorial-style long-form guides.</li>
                    <li><strong>Nurture Flow:</strong> Configured a customized chatbot logic that pre-qualified leads based on retreat suitability before booking a call.</li>
                    <li><strong>Attribution:</strong> Tracked long-tail conversions to ensure ad budget was optimized for actual high-value bookings.</li>
                </ul>

                <h3>The Results</h3>
                <p>Generated €300,000 in booking revenue from only €9,900 in ad spend, representing a 3,030% ROI, and leaving the retreat fully booked for the entire season with a waiting list.</p>
            `
        },
        shoes: {
            title: "€0 to €113K in 58 Days for Designer Footwear",
            tag: "Meta Ads · DTC Launch",
            metrics: [
                { label: "ROAS achieved", val: "21.88x" },
                { label: "Gross Sales", val: "€113K" },
                { label: "Spend", val: "€5,159" }
            ],
            body: `
                <h3>The Challenge</h3>
                <p>A luxury designer shoe brand sought to launch its collection online. They needed immediate sales proof-of-concept without burning cash on unoptimized brand awareness plays.</p>
                
                <h3>The Strategy</h3>
                <p>We bypassed traditional fashion catalog ads. Instead, we executed a launch strategy utilizing high-status aesthetic angles, lifestyle concepts, and premium visual positioning. We structured Meta campaigns to target high-affinity, luxury-consumer segments.</p>
                
                <h3>Operational Breakdown</h3>
                <ul>
                    <li><strong>Status Copywriting:</strong> Framed the shoes as limited-edition artisanal collectibles rather than standard footwear.</li>
                    <li><strong>Lookbook Ads:</strong> Utilized lifestyle and product carousel formats that mimicked organic high-status editorial accounts.</li>
                    <li><strong>Hyper-Targeting:</strong> Restricted ads to users matching specific premium fashion interests and high purchasing power behaviors.</li>
                </ul>

                <h3>The Results</h3>
                <p>Generated €113K in gross sales from €5,159 ad spend in under two months, demonstrating a massive 21.88x ROAS and validating the brand's premium market placement.</p>
            `
        }
    };

    // Modal elements
    const modal = document.getElementById('case-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const modalBody = document.getElementById('modal-content-area');

    const openCaseModal = (caseId) => {
        const data = caseStudies[caseId];
        if (!data) return;

        let metricsHtml = '';
        data.metrics.forEach(m => {
            metricsHtml += `
                <div class="case-meta-item">
                    <span class="case-meta-label">${m.label}</span>
                    <span class="case-meta-val">${m.val}</span>
                </div>
            `;
        });

        modalBody.innerHTML = `
            <div class="case-header">
                <span>${data.tag}</span>
                <h2>${data.title}</h2>
            </div>
            <div class="case-meta-grid">
                ${metricsHtml}
            </div>
            <div class="case-body-content">
                ${data.body}
            </div>
        `;

        // Reset scroll position of modal
        modal.querySelector('.modal-card').scrollTop = 0;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    };

    const closeCaseModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Unlock background scroll
    };

    // Attach event listeners to case buttons
    document.querySelectorAll('.open-case-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const caseId = btn.getAttribute('data-case');
            openCaseModal(caseId);
        });
    });

    closeBtn.addEventListener('click', closeCaseModal);
    
    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCaseModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeCaseModal();
        }
    });

    // 5. Contact Form Submission Animation
    const form = document.getElementById('acquisition-form');
    const formContainer = document.getElementById('form-container');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('form-submit-btn');
            const name = document.getElementById('form-name').value;
            const company = document.getElementById('form-company').value;
            const spend = document.getElementById('form-spend').value;

            // Submit Button loading state
            submitBtn.disabled = true;
            submitBtn.textContent = "Analyzing Brand Details...";

            // Simulate server network latency
            setTimeout(() => {
                // Animate transition to success panel
                formContainer.style.opacity = '0';
                setTimeout(() => {
                    formContainer.innerHTML = `
                        <div class="success-panel" style="text-align: center; padding: 40px 0; animation: fadeIn 0.6s forwards;">
                            <div class="success-icon-wrapper" style="width: 80px; height: 80px; background-color: rgba(52, 199, 89, 0.1); border: 2px solid #34c759; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #34c759; margin: 0 auto 30px auto;">
                                <i data-lucide="check-circle" style="width: 40px; height: 40px;"></i>
                            </div>
                            <h2 style="font-size: 28px; margin-bottom: 12px; color: var(--text-primary);">Audit Request Received</h2>
                            <p style="font-size: 15px; color: var(--text-secondary); max-width: 500px; margin: 0 auto 30px auto; line-height: 1.6;">
                                Thank you, <strong>${name}</strong>. We have registered <strong>${company}</strong> under the monthly ad spend tier (<strong>${spend}</strong>).
                            </p>
                            <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); padding: 20px; border-radius: var(--radius-md); max-width: 480px; margin: 0 auto; text-align: left; font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
                                <h4 style="color: var(--text-primary); margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                                    <i data-lucide="calendar" style="width: 16px; height: 16px; color: var(--accent);"></i> What's Next?
                                </h4>
                                We will review your account's creative footprint and contact you via email within 24 hours to schedule a direct strategy audit with Hannes Jacobsson.
                            </div>
                        </div>
                    `;
                    formContainer.style.opacity = '1';
                    
                    // Reinitialize lucide icons for success screen
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }, 300);
            }, 1800);
        });
    }

    // 6. Mobile menu overlay logic (Simple toggle)
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
            if (mainNav.style.display === 'flex') {
                mainNav.style.position = 'absolute';
                mainNav.style.top = '80px';
                mainNav.style.left = '0';
                mainNav.style.width = '100%';
                mainNav.style.backgroundColor = 'var(--bg-primary)';
                mainNav.style.flexDirection = 'column';
                mainNav.style.padding = '20px';
                mainNav.style.borderBottom = '1px solid var(--border-color)';
                mainNav.style.gap = '20px';
                mainNav.style.zIndex = '999';
            }
        });
    }
});
