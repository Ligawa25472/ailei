import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation"; import Link from "next/link";
import { Calendar, MapPin, Users, FileText, ChevronDown, ChevronUp, Ban } from "lucide-react";
import scheduleBanner from "@/assets/schedule-banner.jpg";
import academyLogo from "@/assets/academy-logo.png";
import { scheduleData, courseCategories, type CourseEvent } from "@/data/scheduleData";
import { useCart } from "@/contexts/CartContext";

const CourseSchedule = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CourseEvent>(scheduleData[0]);
  const [showMore, setShowMore] = useState(false);
  const [expandedInfo, setExpandedInfo] = useState(true);
  const { items: cartItems, totalItems, addItem } = useCart();

  const filteredEvents = activeFilter
    ? scheduleData.filter((e) => e.category === activeFilter)
    : scheduleData;

  const displayedEvents = showMore ? filteredEvents : filteredEvents.slice(0, 12);

  const groupedByMonth: Record<string, CourseEvent[]> = {};
  displayedEvents.forEach((event) => {
    if (!groupedByMonth[event.month]) groupedByMonth[event.month] = [];
    groupedByMonth[event.month].push(event);
  });

  // Ensure selected event is in filtered list
  const isSelectedVisible = filteredEvents.some((e) => e.id === selectedEvent.id);
  if (!isSelectedVisible && filteredEvents.length > 0) {
    // auto-select first visible
    if (selectedEvent.id !== filteredEvents[0].id) {
      // We'll handle this in render
    }
  }

  const effectiveSelected =
    filteredEvents.some((e) => e.id === selectedEvent.id)
      ? selectedEvent
      : filteredEvents[0] || selectedEvent;

  return (
    <div className="min-h-screen bg-background">
      {/* Bookwhen-style Top Bar */}
      <div className="bg-background border-b border-border py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="font-display text-lg md:text-xl text-foreground font-semibold">
            Maritime Advanced Preparatory Academy Course Schedule
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="flex items-center gap-2 text-foreground hover:text-ocean transition-colors"
            >
              <span className="text-sm font-body">🛒</span>
              <span className="font-body text-sm font-semibold">{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src={scheduleBanner}
          alt="Course Schedule"
          className="w-full h-full object-cover"
          width={1920}
          height={512}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 flex items-center gap-8">
            <Image
              src={academyLogo}
              alt="Maritime Advanced Preparatory Academy"
              className="h-32 w-32 md:h-44 md:w-44 object-contain bg-background rounded-lg p-4"
              width={512}
              height={512}
            />
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="bg-background border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {courseCategories.map((cat, idx) => (
              <button
                key={`${cat.filter}-${idx}`}
                onClick={() => {
                  const newFilter = activeFilter === cat.filter ? null : cat.filter;
                  setActiveFilter(newFilter);
                  setShowMore(false);
                  const newFiltered = newFilter
                    ? scheduleData.filter((e) => e.category === newFilter)
                    : scheduleData;
                  if (newFiltered.length > 0) {
                    setSelectedEvent(newFiltered[0]);
                  }
                }}
                className={`px-5 py-2 rounded font-body text-sm font-semibold tracking-wide transition-colors ${
                  activeFilter === cat.filter
                    ? "bg-ocean text-background"
                    : "bg-ocean/80 text-background hover:bg-ocean"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Header */}
      <div className="bg-muted border-b border-border py-3">
        <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
          <h2 className="font-display text-sm uppercase tracking-widest text-foreground font-semibold">
            Schedule
          </h2>
          <Link
            href="/stcw-courses"
            className="font-body text-sm uppercase tracking-widest text-ocean hover:text-foreground transition-colors"
          >
            Exit Booking System
          </Link>
        </div>
      </div>

      {/* Main Content: Schedule + Detail */}
      <section className="container mx-auto px-4 max-w-6xl py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Schedule List */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-ocean">
              <Calendar className="w-4 h-4" />
              <span className="font-body text-sm">From 24 Mar 2026</span>
            </div>

            {Object.entries(groupedByMonth).map(([month, events]) => (
              <div key={month} className="mb-6">
                <h3 className="font-display text-base font-semibold text-foreground mb-3">
                  {month}
                </h3>
                <div className="space-y-0">
                  {events.map((event) => (
                    <button
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className={`w-full text-left grid grid-cols-[32px_36px_60px_1fr_20px] gap-2 items-start py-2.5 px-3 rounded-sm transition-colors ${
                        effectiveSelected.id === event.id
                          ? "bg-muted"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <span className="font-body text-sm text-foreground font-semibold">
                        {event.date}
                      </span>
                      <span className="font-body text-sm text-muted-foreground">
                        {event.day}
                      </span>
                      <span className="font-body text-sm text-muted-foreground">
                        {event.duration}
                      </span>
                      <span
                        className={`font-body text-sm ${
                          effectiveSelected.id === event.id
                            ? "text-ocean font-medium"
                            : "text-foreground"
                        }`}
                      >
                        {event.title}
                      </span>
                      {event.status === "fully-booked" && (
                        <Ban className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {filteredEvents.length > 12 && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="font-body text-sm text-ocean hover:text-foreground transition-colors mx-auto block"
              >
                {showMore ? "Show less" : "Show more..."}
              </button>
            )}

            <p className="font-body text-xs text-muted-foreground mt-4">
              Times shown in timezone: Eastern Time (US &amp; Canada)
            </p>
          </div>

          {/* Right: Event Detail */}
          <EventDetail
            event={effectiveSelected}
            expandedInfo={expandedInfo}
            setExpandedInfo={setExpandedInfo}
          />
        </div>
      </section>

      {/* Footer with Contact & Payments */}
      <div className="bg-muted border-t border-border py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-foreground mb-6">
                Contact
              </h3>
              <div className="font-body text-sm text-muted-foreground space-y-2">
                <p>Maritime Advanced Preparatory Academy</p>
                <p>6236 Kingspointe Pkwy, #1, Orlando, FL, 32819</p>
                <p>4077488302</p>
                <p>courses@ahlei.com</p>
                <p>https://www.ahlei.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-foreground mb-6">
                Payments
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-3">
                Cards accepted:
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 border border-border rounded-sm font-body text-xs font-bold text-foreground">
                  VISA
                </span>
                <span className="px-3 py-1 border border-border rounded-sm font-body text-xs font-bold text-foreground">
                  MC
                </span>
                <span className="px-3 py-1 border border-border rounded-sm font-body text-xs font-bold text-foreground">
                  AMEX
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground mt-4">
                View our{" "}
                <Link href="/contact" className="text-ocean underline">
                  refund policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

/* ─── Rich Details Parser ─── */
const RichDetails = ({ details }: { details: string }) => {
  const lines = details.split("\n");
  const elements: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];
  let key = 0;

  const flushBullets = () => {
    if (bulletBuffer.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc pl-6 mb-4 space-y-1">
          {bulletBuffer.map((b, i) => (
            <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      );
      bulletBuffer = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushBullets();
      return;
    }
    if (trimmed.startsWith("• ") || trimmed.startsWith("- ")) {
      bulletBuffer.push(trimmed.replace(/^[•\-]\s*/, ""));
      return;
    }
    flushBullets();

    const isFirstLine = trimmed === lines[0]?.trim();
    const isHeadingLine =
      (trimmed.endsWith(":") && trimmed.length < 80 && !trimmed.startsWith("*"));

    if (isFirstLine && trimmed.length > 10) {
      elements.push(
        <h3 key={key++} className="font-display text-xl font-semibold text-foreground mb-3">
          {trimmed}
        </h3>
      );
    } else if (isHeadingLine) {
      elements.push(
        <h4 key={key++} className="font-display text-base font-semibold text-foreground mt-4 mb-2">
          {trimmed}
        </h4>
      );
    } else if (trimmed.startsWith("*") && trimmed.endsWith("*")) {
      elements.push(
        <p key={key++} className="font-body text-sm text-muted-foreground leading-relaxed mb-3 italic">
          {trimmed.replace(/^\*\s*/, "").replace(/\s*\*$/, "")}
        </p>
      );
    } else if (trimmed.startsWith("Please note") || trimmed.startsWith("Pre-Requisites")) {
      elements.push(
        <p key={key++} className="font-body text-sm text-muted-foreground leading-relaxed mb-3 font-semibold">
          {trimmed}
        </p>
      );
    } else {
      elements.push(
        <p key={key++} className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
          {trimmed}
        </p>
      );
    }
  });
  flushBullets();

  return <div className="mb-4">{elements}</div>;
};

/* ─── Event Detail Panel ─── */
const EventDetail = ({
  event,
  expandedInfo,
  setExpandedInfo,
}: {
  event: CourseEvent;
  expandedInfo: boolean;
  setExpandedInfo: (v: boolean) => void;
}) => {
  const { addItem } = useCart();
  const router = useRouter();
  const statusColor =
    event.status === "fully-booked"
      ? "text-destructive"
      : event.status === "waitlist"
      ? "text-gold"
      : "text-green-600";

  const statusText =
    event.status === "fully-booked"
      ? "Fully booked"
      : event.status === "waitlist"
      ? "Waitlist"
      : event.spotsAvailable
      ? `${event.spotsAvailable} space${event.spotsAvailable > 1 ? "s" : ""} available`
      : "Spots available";

  return (
    <div className="bg-background border border-border rounded-sm">
      {/* Event Title */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-semibold text-foreground">
            {event.title}
          </h3>
          <a
            href={`/course-schedule?focus=${event.id}`}
            className="flex-shrink-0 px-4 py-1.5 bg-ocean text-background font-body text-xs font-semibold rounded-sm uppercase tracking-wider hover:bg-ocean/90 transition-colors"
          >
            View details
          </a>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>
              {event.day}, {event.date}{" "}
              {event.month.split(",")[0]} '26 &nbsp;·&nbsp;{" "}
              {event.duration}
            </span>
          </div>
          <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{event.address}</span>
          </div>
          <div className="flex items-center gap-2 font-body text-sm">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className={statusColor}>{statusText}</span>
          </div>
        </div>
      </div>

      {/* Information Accordion */}
      <div className="border-b border-border">
        <button
          onClick={() => setExpandedInfo(!expandedInfo)}
          className="w-full flex items-center justify-between p-4 font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Information</span>
          {expandedInfo ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        {expandedInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="px-6 pb-6"
          >
            <h4 className="font-display text-base font-semibold text-foreground mb-4">
              Details
            </h4>
            <RichDetails details={event.details} />

            {event.category === "stcw-basic" && (
              <>
                <a
                  href="/contact"
                  className="inline-block mt-3 font-body text-sm text-ocean hover:text-foreground transition-colors underline"
                >
                  Please click here for our cancellation policy
                </a>

                <div className="mt-6 flex items-center gap-3 p-3 bg-muted rounded-sm">
                  <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">
                      STCW Basic Training Guidance - FLL
                    </p>
                    <p className="font-body text-xs text-ocean">
                      STCW Basic Training Guidance - FLL.pdf (107 KB)
                    </p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>

      {/* Tickets */}
      <div className="p-6">
        <h4 className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Tickets
        </h4>

        {event.status === "fully-booked" && (
          <div className="mb-3">
            <span className="px-3 py-1 bg-destructive/10 text-destructive font-body text-xs rounded-sm font-semibold">
              Fully booked
            </span>
          </div>
        )}

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="font-body text-sm font-semibold text-foreground">
              {event.ticketLabel}
            </span>
          </div>
        </div>
        <p className="font-display text-xl text-foreground mb-2">
          ${event.price.toLocaleString()}.00
        </p>

        {event.spotsAvailable && (
          <p className="font-body text-sm text-green-600 mb-4">
            {event.spotsAvailable} available
          </p>
        )}

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <Link
            href="/course-schedule"
            className="font-body text-sm text-ocean hover:text-foreground transition-colors"
          >
            Select more
          </Link>
          <Link
            href="/booking"
            onClick={(e) => {
              e.preventDefault();
              addItem({
                id: event.id,
                title: event.title,
                price: event.price,
                date: `${event.day}, ${event.date} ${event.month.split(",")[0]} '26`,
                duration: event.duration,
                location: event.location,
                ticketLabel: event.ticketLabel,
              });
              router.push("/booking");
            }}
            className="px-8 py-3 bg-ocean text-background font-body font-semibold text-sm tracking-wider rounded-sm hover:bg-ocean/90 transition-colors"
          >
            View selections
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSchedule;
